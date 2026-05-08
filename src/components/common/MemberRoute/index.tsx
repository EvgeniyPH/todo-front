'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useAppSelector } from '@/store'

interface Props {
  children: React.ReactNode
}

const MemberRoute = ({ children }: Props) => {
  const { user } = useAppSelector(state => state.auth)
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  return user ? children : null
}

export default MemberRoute
