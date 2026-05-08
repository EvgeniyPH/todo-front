import { baseApi } from '@/api/api'

import { TagListResponse } from './types'

export const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getTagList: builder.query<TagListResponse, void>({
      query: data => ({
        url: `/tag/list`,
        method: 'GET',
        data,
      }),
    }),
  }),
})

export const { useGetTagListQuery } = userApi
