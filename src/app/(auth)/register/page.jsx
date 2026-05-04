'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegisterFunc = async (data) => {
        const { email, name, image, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: image,
            callbackURL: "/login",
        });

        if (error) {
            console.error("REGISTRATION ERROR:", error);
            alert(error.message || "Registration failed. Check console.");
        } else {
            console.log("SUCCESS:", res);
            
            // Log out the auto-created session immediately so the navbar stays in logged-out mode
            await authClient.signOut({ redirect: false });

            alert("Registered successfully! Moving to login page.");
            router.push('/login');
        }
    };

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 py-8'>
            <div className='p-6 rounded-xl bg-white w-full max-w-md shadow-md'>
                <h2 className='font-bold text-3xl text-center mb-6'>Register Your Account</h2>
                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>
                    
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold">Name</legend>
                        <input type="text" className="input w-full border border-slate-300 p-2 rounded-lg" placeholder="Type here name" {...register("name", { required: 'Name is required' })} />
                        {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold">Photo URL</legend>
                        <input type="text" className="input w-full border border-slate-300 p-2 rounded-lg" placeholder="Type here photo url" {...register("image", { required: 'Photo URL is required' })} />
                        {errors.image && <p className='text-red-500 text-sm mt-1'>{errors.image.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold">Email</legend>
                        <input type="email" className="input w-full border border-slate-300 p-2 rounded-lg" placeholder="Type here email" {...register("email", { required: 'Email is required' })} />
                        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold">Password</legend>
                        <input 
                            type="password" 
                            className="input w-full border border-slate-300 p-2 rounded-lg" 
                            placeholder="Type here password" 
                            {...register("password", { 
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long'
                                }
                            })} 
                        />
                        {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
                    </fieldset>

                    <button type="submit" className="btn w-full bg-slate-800 text-white mt-6 py-2 rounded-lg hover:bg-slate-700">
                        Register
                    </button>
                    
                    <p className="text-center text-sm text-slate-600 mt-4">
                        Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;