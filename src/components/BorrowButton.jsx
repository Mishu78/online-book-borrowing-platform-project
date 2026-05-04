"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";

const BorrowButton = ({ book }) => {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleBorrow = () => {
        // 1. If Logged Out: Redirect to the login page
        if (!user) {
            alert("You must be logged in to borrow this book.");
            router.push("/login");
            return;
        }

        // 2. Prevent borrowing if copies are empty
        if (book?.available_quantity <= 0) {
            alert("Sorry, there are no available copies left for this book.");
            return;
        }

        // 3. Show confirmation toast/alert on success
        alert(`Successfully borrowed "${book?.title}"! Enjoy your read.`);
    };

    return (
        <button 
            onClick={handleBorrow}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-fit font-medium"
        >
            Borrow This Book
        </button>
    );
};

export default BorrowButton;