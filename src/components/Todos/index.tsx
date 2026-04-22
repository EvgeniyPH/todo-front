'use client'

import { Box, Typography, Divider, Grid, Skeleton } from '@mui/material'
import { format } from 'date-fns'

import TodosHeader from './header'
import TodosList from './list'
import TodosProductivity from './productivity'

import { useAppSelector } from '@/store'
import { selectFilterTodos } from '@/store/todoSlice'

export default function Todos() {
  const todosList = useAppSelector(state => selectFilterTodos(state, ''))

  const currentDate = format(new Date(), 'dd MMM yyyy')

  return (
    <>
      <TodosHeader todosCount={todosList?.length || 0} />
      <Grid container spacing={4}>
        <Grid
          size={{ xs: 12, md: 8 }}
          sx={{
            gap: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <Typography
              component={'h2'}
              variant='h2'
              sx={{
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#a78bfa',
              }}
            >
              Today
            </Typography>
            <Divider
              sx={{
                flex: 1,
                backgroundColor: 'rgba(39, 39, 42, 0.65)',
              }}
            />
            <Typography
              component={'span'}
              variant='body2'
              sx={{
                fontFamily: 'monospace',
                color: '#52525b',
              }}
            >
              {currentDate}
            </Typography>
          </Box>
          {/* {isLoading ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Skeleton variant='rounded' animation='wave' width='100%' height={70} />
              <Skeleton variant='rounded' animation='wave' width='100%' height={70} />
            </Box>
          ) : ( */}
          <TodosList todosList={todosList} />
          {/* )} */}
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TodosProductivity />
        </Grid>
      </Grid>
    </>
  )
}
