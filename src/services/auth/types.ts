import { User } from '@/services/user/types'

export interface authLoginPayload {
  email: string
  password: string
}

export interface authRegistrationPayload {
  email: string
  password: string
  username: string
}

export interface authLoginResponse {
  user: User
  accessToken: string
}

export interface authSignUpResponse extends User {}
