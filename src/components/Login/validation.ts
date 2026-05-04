import { object, string } from 'yup'

export const SCHEMA = object().shape({
  email: string().required('Email is required').email('Invalid email format'),
  password: string().required('Password is required'),
})
