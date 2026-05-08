'use client'

import axios, { AxiosError, AxiosResponse, HttpStatusCode } from 'axios'
import { useLayoutEffect } from 'react'

import { logOut } from '@/store/authSlice'
import { useAppDispatch, useAppSelector } from '@/store'

export const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MAIN_API,
})

export const AxiosInterceptor = () => {
  const dispatch = useAppDispatch()
  const accessToken = useAppSelector(state => state.auth.accessToken)

  useLayoutEffect(() => {
    const requestInterceptor = axiosApi.interceptors.request.use(
      config => {
        try {
          config.headers.Authorization = `Bearer ${accessToken}`
        } catch (error) {
          //not authorization
          console.error('Failed to authorize. May be token expired', error)
        }
        return config
      },
      error => {
        console.log('2222')
        return Promise.reject(error)
      },
    )

    const responseInterceptor = axiosApi.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      (error: AxiosError) => {
        if (error.status === HttpStatusCode.Unauthorized) {
          dispatch(logOut())
        }
        return Promise.reject(error)
      },
    )

    return () => {
      axiosApi.interceptors.request.eject(requestInterceptor)
      axiosApi.interceptors.response.eject(responseInterceptor)
    }
  }, [dispatch, accessToken])

  return null
}

export default AxiosInterceptor
