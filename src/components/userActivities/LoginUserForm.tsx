'use client'
// Import necessary hooks and functions
import React, { FormEvent, useState } from 'react';
import { loginUser } from "../../services/actions/login"

const LoginUserForm = () => {
  const [formData, setFormData] = useState({
    emailAddress: '',
    password: '',
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
      const result = await loginUser(formData);
      console.log(result); // Handle success (e.g., showing a success message, redirecting, etc.)
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginUserForm;