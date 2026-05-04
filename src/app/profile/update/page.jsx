"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UpdateProfilePage = () => {
    const router = useRouter();
    const { data: session, isPending, refetch } = authClient.useSession();
    const user = session?.user;

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            image: ""
        }
    });

    // Handle authentication redirect and initialize form values
    useEffect(() => {
        if (!isPending && !user) {
            router.push("/login");
        }
        if (user) {
            setValue("name", user.name);
            setValue("image", user.image || "");
        }
    }, [isPending, user, router, setValue]);

    const handleUpdateFunc = async (data) => {
        const { name, image } = data;

        const { data: res, error } = await authClient.updateUser({
            name: name,
            image: image,
        });

        if (error) {
            console.error("UPDATE ERROR:", error);
            alert(error.message || "Failed to update profile. Please try again.");
        } else {
            console.log("UPDATE SUCCESS:", res);
            alert("Information updated successfully!");
            
            // Force the active session to refresh so your navbar gets the new details
            await refetch(); 
            
            router.push("/profile");
        }
    };

    if (isPending) {
        return (
            <div className="min-h-[70vh] flex justify-center items-center">
                <p className="text-slate-500 font-medium animate-pulse">
                    Loading profile information...
                </p>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center p-4">
            <div className="bg-white border border-slate-200/60 shadow-lg rounded-2xl p-6 md:p-8 max-w-md w-full">
                <h2 className="font-bold text-2xl text-center mb-6 text-slate-800">
                    Update Information
                </h2>
                
                <form className="space-y-5" onSubmit={handleSubmit(handleUpdateFunc)}>
                    
                    {/* Field 1: Name */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-sm mb-1 text-slate-700">Name</legend>
                        <input 
                            type="text" 
                            className="input w-full border border-slate-300 p-2.5 rounded-xl text-sm focus:outline-blue-500 transition" 
                            placeholder="Type your name" 
                            {...register("name", { required: 'Name is required' })} 
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </fieldset>

                    {/* Field 2: Photo URL */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-sm mb-1 text-slate-700">Photo URL</legend>
                        <input 
                            type="text" 
                            className="input w-full border border-slate-300 p-2.5 rounded-xl text-sm focus:outline-blue-500 transition" 
                            placeholder="Type your photo URL" 
                            {...register("image", { required: 'Photo URL is required' })} 
                        />
                        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
                    </fieldset>

                    <div className="flex flex-col gap-3 pt-2">
                        <button 
                            type="submit" 
                            className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-md"
                        >
                            Update Information
                        </button>
                        
                        <button 
                            type="button" 
                            onClick={() => router.push("/profile")} 
                            className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold py-3 rounded-xl transition duration-200"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfilePage;