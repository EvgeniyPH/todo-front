export type Priority = 'High' | 'Medium' | 'Low'

export type Tag = string

export interface Todo {
  id: number
  title: string
  completed: boolean
  tags: Tag[]
  description: string
  priority: Priority
  dueDate: string
}

export enum PriorityColorsEnum {
  High = 'error',
  Medium = 'primary',
  Low = 'success',
}
