import { baseApi } from '@/api/api'

import { authLoginPayload, authRegistrationPayload, authLoginResponse, authSignUpResponse } from './types'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<authLoginResponse, authLoginPayload>({
      query: data => ({
        url: `/auth/login`,
        method: 'POST',
        data,
      }),
    }),
    registration: builder.mutation<authSignUpResponse, authRegistrationPayload>({
      query: data => ({
        url: `/auth/registration`,
        method: 'POST',
        data,
      }),
    }),
  }),
})

export const { useLoginMutation, useRegistrationMutation } = authApi
