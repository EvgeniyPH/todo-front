import { object, string, array } from 'yup'

export const SCHEMA = object({
  title: string().required('Please enter a title'),
  priority: string().required('Please select a priority level'),
  dueDate: string().required('Please select a date'),
  tags: array().default([]),
  description: string().default(''),
})
