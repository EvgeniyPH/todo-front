'use client'

import { Box, Typography } from '@mui/material'
import TodosItem from './item'
import { todoListResponse } from '@/services/todo/types'

interface Props {
  todosList?: todoListResponse
}

export default function TodosList({ todosList }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      {!!todosList && todosList.todos.count ? (
        todosList.todos.rows.map(todo => <TodosItem key={todo.id} todo={todo} />)
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <Typography variant='body1' color='text.secondary' sx={{ color: 'text.secondary' }}>
            No todos found! Add some to get started!
          </Typography>
        </Box>
      )}
    </Box>
  )
}
