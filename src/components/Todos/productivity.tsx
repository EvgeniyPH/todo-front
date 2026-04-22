'use client'

import { Box, Card, CardContent, Typography, Grid } from '@mui/material'
import ProgressBar from '@/components/common/Progressbar'

import { useAppSelector } from '@/store'

export default function TodosProductivity() {
  const { list: todosList } = useAppSelector(store => store.todos)

  const completedTodos = todosList?.filter(todo => todo.completed === true).length || 0
  const totalTodos = todosList?.length || 0
  const completedTodosPercentage = completedTodos ? (completedTodos / totalTodos) * 100 : 0

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      <Card variant='outlined' sx={{ padding: 1.2 }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem',
            '&:last-child': {
              paddingBottom: '16px',
            },
          }}
        >
          <Typography
            component={'h4'}
            variant='subtitle2'
            sx={{
              textTransform: 'uppercase',
              color: 'text.secondary',
              fontWeight: 700,
            }}
          >
            Productivity
          </Typography>
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: '0.5rem',
                marginBottom: '0.5rem',
              }}
            >
              <Typography
                component={'span'}
                variant='h1'
                sx={{
                  fontSize: '2.25rem',
                }}
              >
                {completedTodosPercentage.toFixed(0)}%
              </Typography>
            </Box>
            <ProgressBar value={completedTodosPercentage} />
          </Box>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <Typography
                component={'p'}
                variant='body2'
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'text.secondary',
                }}
              >
                Completed
              </Typography>
              <Typography component={'p'} variant='h6'>
                {completedTodos}
              </Typography>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <Typography
                component={'p'}
                variant='body2'
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'text.secondary',
                }}
              >
                Remaining
              </Typography>
              <Typography component={'p'} variant='h6'>
                {totalTodos - completedTodos}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}
