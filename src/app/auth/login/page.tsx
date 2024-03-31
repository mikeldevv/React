import React from 'react';
import LoginUserForm from '../../../components/userActivities/LoginUserForm'; // Adjust the path as necessary

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
      <h1 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Login</h1>
      <LoginUserForm />
      </div>
    
    </div>
  );
};

export default LoginPage;