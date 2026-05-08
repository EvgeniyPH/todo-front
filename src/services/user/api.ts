import { baseApi } from '@/api/api'

import { User } from './types'

export const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getUserProfile: builder.query<User, void>({
      query: data => ({
        url: `/user/profile`,
        method: 'GET',
        data,
      }),
    }),
  }),
})

export const { useGetUserProfileQuery } = userApi
