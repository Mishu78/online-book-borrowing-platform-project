'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    
    const handleLoginFunc = async (data) => {
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            console.error("ERROR:", error);
            alert(error.message || "Login failed");
        } else {
            console.log("SUCCESS:", res);
            alert("Logged in successfully! Redirecting...");
            router.push('/');
        }
    };


    const handleGoogleSignin = async () => {
      const data=  await authClient.signIn.social({
            provider: "google",
            callbackURL: "/", 
        });
    };

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 py-10'>
            <div className='p-6 rounded-xl bg-white w-full max-w-md shadow-lg'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login to Your Account</h2>
                
                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold">Email</legend>
                        <input type="email" className="input w-full border p-2 rounded-md" placeholder="Type here email" {...register("email", { required: 'Email field is required' })} />
                        {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold">Password</legend>
                        <input type="password" className="input w-full border p-2 rounded-md" placeholder="Type here password" {...register("password", { required: 'Password field is required' })} />
                        {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>}
                    </fieldset>

                    <button type="submit" className="btn w-full bg-slate-800 text-white mt-6 py-2 rounded-md hover:bg-slate-700">
                        Login
                    </button>
                </form>

            
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
                    Don't have an account? <Link href="/register" className="text-blue-600 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;