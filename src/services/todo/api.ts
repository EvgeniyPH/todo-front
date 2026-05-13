import { baseApi } from '@/api/api'

import {
  todoListResponse,
  paramsFilter,
  createTodoResponse,
  createTodoPayload,
  todoTotalsResponse,
} from './types'

export const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getTodoList: builder.query<todoListResponse, paramsFilter>({
      query: params => ({
        url: `/todo/list`,
        method: 'GET',
        params,
      }),
      providesTags: () => ['Todo'],
    }),
    countTotals: builder.query<todoTotalsResponse, void>({
      query: () => ({
        url: `/todo/totals`,
        method: 'GET',
      }),
      providesTags: () => ['TodoTotals'],
    }),
    createTodo: builder.mutation<createTodoResponse, createTodoPayload>({
      query: data => ({
        url: `/todo`,
        method: 'POST',
        data,
      }),
      invalidatesTags: () => ['Todo', 'TodoTotals'],
    }),
    toggleCompleteTodo: builder.mutation<void, { todoId: number; data: { completed: boolean } }>({
      query: ({ todoId, data }) => ({
        url: `/todo/toggle/${todoId}`,
        method: 'POST',
        data,
      }),
      invalidatesTags: () => ['TodoTotals'],
    }),
    deleteTodo: builder.mutation<void, number>({
      query: todoId => ({
        url: `/todo/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => ['Todo', 'TodoTotals'],
    }),
  }),
})

export const {
  useGetTodoListQuery,
  useCountTotalsQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useToggleCompleteTodoMutation,
} = userApi
