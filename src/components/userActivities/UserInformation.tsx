'use client'

import React, { useEffect, useState } from 'react';
import { fetchUser } from "../../services/userActivities/userprofile";

interface UserInfo {
    firstName: string;
    lastName: string;
    emailAddress: string;
  }
const UserInformation = () => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        // Assuming fetchUser handles the token internally
        const data = await fetchUser();
        setUserInfo(data); // Assuming data is the user info object
        setLoading(false);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred while fetching user information.';
        setError(errorMessage);
        setLoading(false);
      }
    };

    getUserInfo();
  }, []);

  if (loading) return <div>Loading user information...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userInfo) return <div>No user information available.</div>;

  return (
    <div>
      <h1>User Information</h1>
      {/* Check if these properties exist in your userInfo object */}
      <p>FirstName: {userInfo.firstName}</p>
      <p>LastName: {userInfo.lastName}</p>
      <p>Email: {userInfo.emailAddress}</p>
      {/* You can add more user information fields here as needed */}
    </div>
  );
};

export default UserInformation;
