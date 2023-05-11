import { useUser } from '@auth0/nextjs-auth0/client'
import React from 'react'

const Profile = () => {
   const {isLoading,user,error} = useUser()
  return (
    <>
     {/* {user ? (<p>Loading.......</p>)} */}

    </>
  )
}

export default Profile