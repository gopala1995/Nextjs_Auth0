'use client'
import Profile from "@/components/Profile";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
     const { user,isLoading, error}= useUser
  return (
    <>
  
      <Profile/>
  
      {/* <hi>Hello My Next app</hi> */}
    </>
  );
}
