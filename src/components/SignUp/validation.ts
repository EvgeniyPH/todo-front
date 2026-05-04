import { object, string, ref } from 'yup'

export const SCHEMA = object().shape({
  email: string().required('Email is required').email('Invalid email format'),
  username: string().required('Username is required'),
  password: string().required('Password is required'),
  confirmPassword: string()
    .required('Confirm Password is required')
    .oneOf([ref('password')], 'Passwords do not match'),
})
