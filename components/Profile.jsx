import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

const Profile = () => {
  const { isLoading, user, error } = useUser();
  return (
    <>
      {isLoading && <p>Loading.......</p>}
      {user && (
        <div>
          <div>
            <div>
              <img src={user.picture} />
              <h2>{user.name}</h2>
            </div>
            <div>
              <p>Name: {user.given_name}</p>
              <p>Nick Name: {user.nickname}</p>
              <p> Sub: {user.sub}</p>
              <p> Sid: {user.sid}</p>
            </div>
          </div>
        </div>
      )}
      {error && (
        <>
          <h1>Please login first</h1>
        </>
      )}
    </>
  );
};

export default Profile;
