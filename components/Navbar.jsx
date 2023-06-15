"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import Profile from "./Profile";
import Link from "next/link";

const Navbar = () => {
  const { isLoading, user, error } = useUser();
  // console.log(user.name);
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      {/* //main navbar div */}
        <div className="w-full flex flex-row justify-between"> 
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight ">Auth0</span>
          </div>
          <div >
            {!isLoading && !user && (
              <div>
                <Link
                  href="/api/auth/login"
                  class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white hover:rounded-md rounded-lg shadow-xl mx-2"
                >
                  Login
                </Link>
              </div>
            )}
            {user && (
              <div className="flex justify-end">
                <button className="block h-8 w-8 mt-1 rounded-full float-right overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                  <img
                    className="h-full w-full object-cover"
                    src={user.picture}
                    alt="Your avatar"
                  />
                </button>
                <div className=" py-2 w-48">
                  <Link
                    href="/api/auth/me"
                    className=" px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white hover:rounded-md rounded-lg shadow-xl mx-2"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/api/auth/logout"
                    className=" px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white hover:rounded-md rounded-lg shadow-xl "
                  >
                    Log out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
