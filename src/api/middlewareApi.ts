import { isRejectedWithValue, type Middleware, PayloadAction } from '@reduxjs/toolkit'
import { HttpStatusCode } from 'axios'
import { showNotification } from '@/utils/showNotification'

const serverErrorToString = (error: { data?: { message?: string } }): string => {
  return error?.data?.message ? error.data.message : 'Something went wrong'
}

export const errorLogger: Middleware = () => next => action => {
  if (isRejectedWithValue(action)) {
    if (
      (action as PayloadAction<{ status: number }>).payload.status !==
      HttpStatusCode.TooManyRequests
    ) {
      if (action.payload) {
        showNotification(serverErrorToString(action.payload), 'error')
      }
      // console.log(serverErrorToString(action.payload))
    }
  }
  return next(action)
}
