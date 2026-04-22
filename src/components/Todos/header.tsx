import { Box, Typography, Chip } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

interface Props {
  todosCount: number
}

export default function TodosHeader({ todosCount }: Props) {
  return (
    <Box
      sx={{
        marginBottom: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <Box>
          <Typography
            variant='h4'
            component={'h1'}
            sx={{
              letterSpacing: '-0.025em',
              color: 'primary.text',
              fontWeight: 900,
            }}
          >
            Todo Overview
          </Typography>
          <Typography variant='body1' component={'p'} sx={{ marginTop: '0.25rem', color: 'text.secondary' }}>
            You have {todosCount} tasks remaining for today.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '0.5rem' }}>
          <Chip
            icon={<FilterListIcon />}
            label='Priority'
            variant='outlined'
            size='small'
            sx={{
              border: '1px solid #27272a',
              color: '#a1a1aa',
              transition: 'border-color 150ms',
              '&:hover': {
                borderColor: '#3f3f46',
              },
            }}
          />
          <Chip
            icon={<CalendarTodayIcon />}
            label='Date'
            variant='outlined'
            size='small'
            sx={{
              border: '1px solid #27272a',
              color: '#a1a1aa',
              transition: 'border-color 150ms',
              '&:hover': {
                borderColor: '#3f3f46',
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
