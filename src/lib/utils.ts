import * as yup from 'yup';

export const registerUserSchema = yup.object({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    emailAddress: yup.string().email('Must be a valid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    otp: yup.string().required('Otp is required')
  }).required();

export const loginUserSchema = yup.object({
    emailAddress: yup.string().email('Must be a valid email').required('Email is required'),
    password: yup.string().required('Password is required')
}).required();