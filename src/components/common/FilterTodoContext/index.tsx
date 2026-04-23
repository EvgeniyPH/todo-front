'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface FilterContextType {
  filterTodo: string
  setFilterTodo: (id: string) => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export const FilterTodoContext = ({ children }: { children: ReactNode }) => {
  const [filterTodo, setFilterTodo] = useState<string>('')

  return <FilterContext.Provider value={{ filterTodo, setFilterTodo }}>{children}</FilterContext.Provider>
}

export const useFilterTodoContext = () => {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error('useFilterTodoContext must be used within a FilterTodoProvider')
  }
  return context
}
