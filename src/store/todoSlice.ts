import { createSlice, createSelector } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Todo } from '@/types/Todo'

interface TodosState {
  list: Todo[] // Array of todos
}

const initialState: TodosState = {
  list: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.list.push(action.payload)
    },

    toggleTodoComplete: (state, action: PayloadAction<number>) => {
      const toggleTodo = state.list.find(todo => todo.id === action.payload)

      if (toggleTodo) {
        toggleTodo.completed = !toggleTodo.completed
      }
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(todo => todo.id !== action.payload)
    },
  },
  selectors: {
    selectTodoList: state => state,
    selectTodoByTitle: (state, title: string) => title,
    filterTodoByCompleted: (state, completed: boolean) => completed,
  },
})

export const selectFilterTodos = createSelector(
  [todoSlice.selectors.selectTodoList, todoSlice.selectors.selectTodoByTitle],
  (todos, title) =>
    todos.list.filter(todo => {
      return todo.title.toLowerCase().includes(title.toLowerCase())
    }),
)

export const { addTodo, toggleTodoComplete, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
