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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="email"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
       <input
        type="text"
        name="otp"
        value={formData.otp}
        onChange={handleChange}
        placeholder="Otp"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterUserForm;