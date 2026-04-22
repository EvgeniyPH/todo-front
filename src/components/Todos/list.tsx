'use client'

import { Box, Typography } from '@mui/material'
import TodosItem from './item'
import { Todo } from '@/types/Todo'

interface Props {
  todosList: Todo[]
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
      {!!todosList?.length ? (
        todosList.map(todo => <TodosItem key={todo.id} todo={todo} />)
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
