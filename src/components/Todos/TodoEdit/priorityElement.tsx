import { Typography, Button, Grid } from '@mui/material'
import { FieldErrors, FieldValues } from 'react-hook-form'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import BoltIcon from '@mui/icons-material/Bolt'
import LowPriorityIcon from '@mui/icons-material/LowPriority'
import { Priority } from '@/types/Todo'

interface Props {
  formPriority: string
  setPriority: (priority: Priority) => void
  errors: FieldErrors<FieldValues>
}

export default function PriorityElement({ formPriority, setPriority, errors }: Props) {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <Typography
          variant='body2'
          component={'label'}
          sx={{
            fontWeight: 700,
            textTransform: 'uppercase',
            color: '#a1a1aa',
            letterSpacing: '0.1em',
            display: 'block',
          }}
        >
          Priority Level
        </Typography>
      </Grid>
      <Grid size={{ md: 4 }}>
        <Button
          size='medium'
          variant={'outlined'}
          color='error'
          startIcon={<PriorityHighIcon />}
          sx={[
            {
              padding: '8px 25px',
              width: '100%',
              fontSize: '1rem',
              backgroundColor: '#18181b',
              '& .MuiSvgIcon-root': {
                fontSize: '1rem',
              },
            },
            formPriority === 'High' && {
              backgroundColor: '#ef444456',
            },
          ]}
          onClick={() => {
            setPriority('High')
          }}
        >
          High
        </Button>
      </Grid>
      <Grid size={{ md: 4 }}>
        <Button
          size='medium'
          variant={'outlined'}
          color='primary'
          startIcon={<BoltIcon />}
          sx={[
            {
              padding: '8px 35px',
              width: '100%',
              fontSize: '1rem',
              backgroundColor: '#18181b',
              '& .MuiSvgIcon-root': {
                fontSize: '1rem',
              },
            },
            formPriority === 'Medium' && {
              backgroundColor: '#a78bfa55',
            },
          ]}
          onClick={() => {
            setPriority('Medium')
          }}
        >
          Medium
        </Button>
      </Grid>
      <Grid size={{ md: 4 }}>
        <Button
          size='medium'
          variant={'outlined'}
          color='success'
          startIcon={<LowPriorityIcon />}
          sx={[
            {
              padding: '8px 35px',
              width: '100%',
              fontSize: '1rem',
              backgroundColor: '#18181b',
              '& .MuiSvgIcon-root': {
                fontSize: '1rem',
              },
            },
            formPriority === 'Low' && {
              backgroundColor: '#34d39954',
            },
          ]}
          onClick={() => {
            setPriority('Low')
          }}
        >
          Low
        </Button>
      </Grid>
      <Grid size={{ xs: 12 }}>
        {errors.priority && (
          <Typography variant='body2' color='error' sx={{ fontSize: '0.855rem' }}>
            {errors.priority.message as string}
          </Typography>
        )}
      </Grid>
    </Grid>
  )
}
