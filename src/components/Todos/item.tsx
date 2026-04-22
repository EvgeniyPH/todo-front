'use client'

import { useState, ChangeEvent } from 'react'

import { Box, Typography, Card, CardContent, Checkbox, Chip } from '@mui/material'

import { Todo, PriorityColorsEnum } from '@/types/Todo'
import { useDispatch } from 'react-redux'
import { toggleTodoComplete } from '@/store/todoSlice'

interface Props {
  todo: Todo
}

const Item = ({ todo }: Props) => {
  const label = { slotProps: { input: { 'aria-label': 'Checkbox todo' } } }
  const [completed, setCompleted] = useState(todo.completed)
  const dispatch = useDispatch()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCompleted(event.target.checked)
    dispatch(toggleTodoComplete(todo.id))
  }

  return (
    <Card
      variant='outlined'
      sx={{
        backgroundColor: '#121215',
        transition: 'all 150ms',
        '&:hover': {
          borderColor: 'rgba(167, 139, 250, 0.4)',
          backgroundColor: '#18181b',
        },
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Checkbox
          {...label}
          size='small'
          sx={{ alignItems: 'start', height: '1.75rem' }}
          checked={completed}
          onChange={handleChange}
          slotProps={{
            input: { 'aria-label': 'controlled' },
          }}
        />
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'flex-start',
              gap: '1rem',
              marginBottom: '0.25rem',
            }}
          >
            <Typography
              component={'h3'}
              variant='subtitle2'
              sx={[
                completed && {
                  color: 'text.secondary',
                  textDecoration: 'line-through',
                },
              ]}
            >
              {todo.title}
            </Typography>
            <Chip label={todo.priority} variant='outlined' size='small' color={PriorityColorsEnum[todo.priority]} />
          </Box>
          <Typography
            component={'p'}
            variant='body2'
            sx={{
              color: '#a1a1aa',
              marginBottom: '0.75rem',
              display: '-webkit-box',
              overflow: 'hidden',
            }}
          >
            {todo.description}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            {!!todo.tags.length &&
              todo.tags.map(tag => (
                <Chip
                  key={tag}
                  label={`#${tag}`}
                  variant='outlined'
                  size='small'
                  sx={{
                    border: '1px solid #27272a',
                    color: 'text.secondary',
                  }}
                />
              ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Item
