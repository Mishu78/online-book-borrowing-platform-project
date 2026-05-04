"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

const ProfilePage = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    // Private Route protection gate
    useEffect(() => {
        if (!isPending && !user) {
            router.push("/login");
        }
    }, [isPending, user, router]);

    if (isPending) {
        return (
            <div className="min-h-[70vh] flex justify-center items-center">
                <p className="text-slate-500 font-medium animate-pulse">
                    Loading profile...
                </p>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center p-4">
            <div className="bg-white border border-slate-200/60 shadow-lg rounded-2xl p-8 max-w-md w-full flex flex-col items-center text-center gap-5">
                <h2 className="text-3xl font-black text-slate-800">My Profile</h2>
                
                {/* User Profile Picture */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-slate-200 bg-slate-50 flex items-center justify-center">
                    {user.image ? (
                        <Image 
                            src={user.image} 
                            alt={user.name || "User Profile"} 
                            fill 
                            className="object-cover"
                            unoptimized // Add this if external domains aren't added to next.config.js yet
                        />
                    ) : (
                        <FaUserCircle className="text-7xl text-slate-400" />
                    )}
                </div>

                {/* User Information */}
                <div className="space-y-1 w-full">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Full Name</p>
                    <h3 className="text-xl font-bold text-slate-800">{user.name}</h3>
                </div>

                <div className="space-y-1 w-full">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Email Address</p>
                    <p className="text-slate-600 font-medium">{user.email}</p>
                </div>

                <hr className="w-full border-slate-100 my-2" />

                {/* Action button leading to Update route */}
                <button 
                    onClick={() => router.push("/profile/update")} 
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-md"
                >
                    Update Profile Info
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;