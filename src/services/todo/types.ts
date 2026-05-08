import { Tag } from '@/services/tag/types'

export type Priority = 'High' | 'Medium' | 'Low'

export interface Todo {
  id: number
  title: string
  completed: boolean
  tags: Tag[]
  description: string
  priority: Priority
  dueDate: string
}

export interface todoListResponse {
  todos: {
    count: number
    rows: Todo[]
  }
}

export type paramsFilter = Record<'title' | 'status', string | string[]>

export interface createTodoResponse {
  todo: Todo
}
export interface createTodoPayload extends Omit<Todo, 'id'> {}

export interface updateTodoPayload extends Partial<Omit<Todo, 'id'>> {}
