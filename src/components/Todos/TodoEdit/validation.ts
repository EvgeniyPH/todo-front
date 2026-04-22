import { object, string } from 'yup'

export const SCHEMA = object({
  title: string().required('Please enter a title'),
  priority: string().required('Please select a priority level'),
  dueDate: string().required('Please select a date'),
  tags: string().default(''),
  description: string().default(''),
})
