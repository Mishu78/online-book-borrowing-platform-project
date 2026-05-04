'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    // 1. Email and Password Registration Logic
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

    // 2. Google Social Login Logic for Registration Page
    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/", // Redirect directly to Home on successful login
        });
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
                </form>

                {/* Social Login Section */}
                <div className="divider my-6 text-center text-slate-400 text-sm">OR</div>
                
                <button onClick={handleGoogleSignin} className="btn btn-outline w-full border border-slate-300 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-slate-50">
                    <svg className="w-5 h-5" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z"/>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    </svg>
                    Continue with Google
                </button>

                <p className="text-center text-sm text-slate-600 mt-4">
                    Already have an account? <Link href="/login" className="text-blue-600 hover:underline font-medium">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;