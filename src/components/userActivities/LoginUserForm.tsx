'use client'
import React, { FormEvent, useState } from 'react';
import { loginUser } from "../../services/userActivities/login"

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
      const accessCode = await loginUser(formData);
      if (typeof window !== "undefined") {
        localStorage.setItem('AuthToken', accessCode);
        console.log('Login successful, token stored.');
      }// Handle success (e.g., showing a success message, redirecting, etc.)
    } catch (error) {
      console.error('Login failed:', error);
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