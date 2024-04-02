'use client'

import { registerUser } from "../../lib/user-api"
import { registerUserSchema } from '../../lib/utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const RegisterUserForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserRegistrationData>({
    resolver: yupResolver(registerUserSchema)
  });

  const onSubmit = async (data: UserRegistrationData) => {
    try {
       await registerUser(data);
    } catch (error) {
      console.error('Registration failed:', error); // Handle error
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10 space-y-4">
       <input
        {...register('firstName')}
        placeholder="First Name"
        className="input"
      />
      <p style={{ color: 'red' }}>{errors.firstName?.message}</p>
      <input
        {...register('lastName')}
        placeholder="Last Name"
        className="input"
      />
      <p style={{ color: 'red' }}>{errors.lastName?.message}</p>

      <input
        {...register('emailAddress')}
        type="email"
        placeholder="Email"
        className="input"
      />
      <p style={{ color: 'red' }}>{errors.emailAddress?.message}</p>

      <input
        {...register('password')}
        type="password"
        placeholder="Password"
        className="input"
      />
      <p style={{ color: 'red' }}>{errors.password?.message}</p>

      <input
        {...register('otp')}
        placeholder="Otp"
        className="input"
      />
      <p style={{ color: 'red' }}>{errors.otp?.message}</p>

      <button type="submit" className="btn">Register</button>
    </form>
  );
};

export default RegisterUserForm;