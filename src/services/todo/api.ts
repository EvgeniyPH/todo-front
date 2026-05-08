import { baseApi } from '@/api/api'

import { todoListResponse, paramsFilter, createTodoResponse, createTodoPayload } from './types'

export const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getTodoList: builder.query<todoListResponse, paramsFilter>({
      query: params => ({
        url: `/todo/list`,
        method: 'GET',
        params,
      }),
    }),
    createTodo: builder.mutation<createTodoResponse, createTodoPayload>({
      query: data => ({
        url: `/todo/create`,
        method: 'POST',
        data,
      }),
    }),
  }),
})

export const { useGetTodoListQuery, useCreateTodoMutation } = userApi
