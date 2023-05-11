"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

const Navbar = () => {
  const { isLoading, user, error } = useUser();
  console.log(user);
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="float-right">
            {user ? (
              <img
                src={user.picture}
                alt="Profile"
                className="rounded-full img-fluid h-12 w-12 flex items-center justify-center"
              />
            ) : (
              <a
                href="/api/auth/login"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Login
              </a>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
