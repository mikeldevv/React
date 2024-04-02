'use client'
import { loginUser } from "../../lib/user-api"
import { loginUserSchema } from '../../lib/utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const LoginUserForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserLoginData>({
    resolver: yupResolver(loginUserSchema)
  });

  const onSubmit = async (data: UserLoginData) => {
    try {
      const accessCode = await loginUser(data);
       if (typeof window !== "undefined") {
        localStorage.setItem('AuthToken', accessCode);
    }
   } catch (error) {
      console.error('Login failed:', error); // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10 space-y-4">
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

      <button type="submit"  className="btn">Login</button>
    </form>
  );
};

export default LoginUserForm;