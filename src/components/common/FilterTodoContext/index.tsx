'use client'

import React, { createContext, useContext, ReactNode, Dispatch, SetStateAction } from 'react'
import { useParamsFilter } from '@/hooks/useParamsFilter'

interface FilterContextType {
  filters: Record<'title' | 'status', string | string[]>
  setFilters: Dispatch<SetStateAction<Record<'title' | 'status', string | string[]>>>
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export const FilterTodoContext = ({ children }: { children: ReactNode }) => {
  const { filters, setFilters } = useParamsFilter({
    filterFields: [
      { field: 'title', type: 'string' },
      { field: 'status', type: 'string' },
    ],
  })

  return <FilterContext.Provider value={{ filters, setFilters }}>{children}</FilterContext.Provider>
}

export const useFilterTodoContext = () => {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error('useFilterTodoContext must be used within a FilterTodoProvider')
  }
  return context
}
