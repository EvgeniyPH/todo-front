'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from '@/types/User'

export interface AuthState {
  user: User | null
  token: string | null
}

const initialState: AuthState = { user: null, token: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logOut: state => {
      state.user = null
      state.token = null
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer
