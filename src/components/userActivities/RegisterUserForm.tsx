'use client'
// Import necessary hooks and functions
import React, { FormEvent, useState } from 'react';
import { registerUser } from "../../services/userActivities/register"

const RegisterUserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    otp: ''
  });

  // Handle form submission
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const result = await registerUser(formData);
      console.log(result); // Handle success (e.g., showing a success message, redirecting, etc.)
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        className="input"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        className="input"
      />
      <input
        type="email"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
        placeholder="Email"
        className="input"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="input"
      />
       <input
        type="text"
        name="otp"
        value={formData.otp}
        onChange={handleChange}
        placeholder="Otp"
        className="input"
      />
      <button type="submit" className="btn">Register</button>
    </form>
  );
};

export default RegisterUserForm;