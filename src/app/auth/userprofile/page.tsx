import React from 'react';
import UserInformation from '../../../components/userActivities/UserInformation'; // Adjust the path as necessary

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">Profile</h1>
        <UserInformation />
      </div>
    </div>
  );
};

export default ProfilePage;