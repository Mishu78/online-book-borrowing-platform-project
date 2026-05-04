"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [imgError, setImgError] = useState(false);

  // Handles logging out the user safely
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <div className="border-b px-2 bg-white">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Left: Website Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.jpg"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            style={{ width: "auto", height: "auto" }}
            className="object-cover"
          />
          <h3 className="font-black text-lg">Borrow&Connect</h3>
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"} className="hover:text-blue-600 transition">Home</Link>
          </li>
          <li>
            <Link href={"/all-books"} className="hover:text-blue-600 transition">All Books</Link>
          </li>
          {/* Show My Profile link only when logged in */}
          {user && (
            <li>
              <Link href={"/profile"} className="hover:text-blue-600 transition">My Profile</Link>
            </li>
          )}
        </ul>

        {/* Right: Conditional Rendering */}
        <div className="flex gap-4 items-center">
          {user ? (
            // If logged in: Show the User's Name, Profile Image, and Logout button
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2">
                {user.image && !imgError ? (
                  <img
                    src={user.image}
                    alt={user.name || "User"}
                    className="w-7 h-7 rounded-full object-cover border border-slate-200"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <FaUserCircle className="text-xl text-slate-500" />
                )}
                <span className="font-semibold">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md text-xs transition font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            // If logged out: Show Login button
            <ul className="flex items-center text-sm">
              <li className="flex items-center gap-2">
                <FaUserCircle className="text-lg" /> 
                <Link href={"/login"} className="font-medium hover:text-blue-600 transition">
                  Login
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;