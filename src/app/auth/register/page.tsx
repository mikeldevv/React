import React from 'react';
import RegisterUserForm from '../../../components/userActivities/RegisterUserForm'; // Adjust the path as necessary

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <h1 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Register</h1>
        <RegisterUserForm />
      </div>
    </div>
  );
};

export default RegisterPage;