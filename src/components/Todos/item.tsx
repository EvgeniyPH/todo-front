'use client'

import { useState, ChangeEvent } from 'react'

import {
  Box,
  Typography,
  Card,
  CardContent,
  Checkbox,
  Chip,
  IconButton,
  Skeleton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { PriorityColorsEnum } from '@/types/Todo'
import { Todo } from '@/services/todo/types'
import { useDeleteTodoMutation, useToggleCompleteTodoMutation } from '@/services/todo/api'
import { showNotification } from '@/utils/showNotification'

interface Props {
  todo: Todo
}

const Item = ({ todo }: Props) => {
  const label = { slotProps: { input: { 'aria-label': 'Checkbox todo' } } }
  const [completed, setCompleted] = useState(todo.completed)
  const [toDelete, setToDeleted] = useState(false)
  const [deleteTodo] = useDeleteTodoMutation()
  const [toggleCompleteTodo, { isLoading }] = useToggleCompleteTodoMutation()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCompleted(event.target.checked)
    toggleCompleteTodo({ todoId: todo.id, data: { completed: event.target.checked } })
      .unwrap()
      .then(() => {
        showNotification('Todo completed successfully', 'success')
      })
      .catch(() => {
        showNotification('Error toggling todo completion', 'error')
      })
  }

  const handleDelete = () => {
    setToDeleted(true)
    deleteTodo(todo.id)
      .unwrap()
      .then(() => {
        showNotification('Todo deleted successfully', 'success')
      })
      .catch(() => {
        setToDeleted(false)
        showNotification('Error deleting todo', 'error')
      })
  }

  return (
    <>
      {toDelete ? (
        <Skeleton variant='rounded' animation='wave' width='100%' height={120} />
      ) : (
        <Card
          variant='outlined'
          sx={{
            backgroundColor: '#121215',
            transition: 'all 150ms',
            '&:hover': {
              borderColor: 'rgba(167, 139, 250, 0.4)',
              backgroundColor: '#18181b',
              '& .MuiIconButton-root': {
                maxWidth: '60px',
                '& .MuiSvgIcon-root': {
                  fontSize: '1.25rem',
                },
              },
            },
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              gap: '1rem',
              paddingRight: '0.5rem',
            }}
          >
            <Checkbox
              {...label}
              size='small'
              sx={{ alignSelf: 'baseline', paddingTop: '0.25rem' }}
              checked={completed}
              onChange={handleChange}
              disabled={isLoading}
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
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '0.25rem',
                  paddingTop: '0.15rem',
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
                <Chip
                  label={todo.priority}
                  variant='outlined'
                  size='small'
                  color={PriorityColorsEnum[todo.priority]}
                />
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
                      key={tag.id}
                      label={`#${tag.name}`}
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
            <Box>
              <IconButton
                size='small'
                aria-label='delete'
                color='primary'
                onClick={handleDelete}
                sx={{ alignItems: 'start', maxWidth: '0px', transition: 'all 1s' }}
              >
                <CloseIcon sx={{ fontSize: 0, transition: 'all 0.4s' }} />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default Item
