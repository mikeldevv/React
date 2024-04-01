'use client'

import React, { useEffect, useState } from 'react';
import { fetchUser } from "../../lib/user-api";

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
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">User Information</h2>
      <div className="space-y-3">
        <p><span className="font-semibold">First Name:</span> {userInfo.firstName}</p>
        <p><span className="font-semibold">Last Name:</span> {userInfo.lastName}</p>
        <p><span className="font-semibold">Email:</span> {userInfo.emailAddress}</p>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default UserInformation;
