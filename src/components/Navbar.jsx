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
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full select-none">
        {/* Left: Website Logo */}
        <Link href="/" className="flex gap-2 items-center cursor-pointer">
          <Image
            src={"/logo.jpg"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            style={{ width: "auto", height: "auto" }}
            className="object-cover"
          />
        </Link>

        {/* Center: Navigation Links */}
        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"} className="hover:text-blue-600 transition font-medium">Home</Link>
          </li>
          <li>
            <Link href={"/all-books"} className="hover:text-blue-600 transition font-medium">All Books</Link>
          </li>
          {/* REQUIREMENT COMPLIANCE: Display link only if the user is logged in */}
          {user && (
            <li>
              <Link href={"/profile"} className="hover:text-blue-600 transition font-medium">My Profile</Link>
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
                <span className="font-bold text-slate-700">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md text-xs transition font-semibold shadow-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            // If logged out: Show Login button
            <div className="flex items-center text-sm">
              <Link href={"/login"} className="flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 transition">
                <FaUserCircle className="text-lg" /> 
                <span>Login</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;