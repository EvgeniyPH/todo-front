import { Box, Typography } from '@mui/material'
import TerminalIcon from '@mui/icons-material/Terminal'

export default function SidebarBrand() {
  return (
    <Box
      sx={{
        padding: '0 1.5rem',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      <Box
        sx={{
          width: '32px',
          height: '32px',
          backgroundColor: 'primary.main',
          borderRadius: '0.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='h6'
          component='span'
          sx={{
            color: '#0a0012',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TerminalIcon
            sx={{
              fontSize: '18px',
            }}
          />
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          component='span'
          variant='h6'
          sx={{
            color: 'primary.main',
            letterSpacing: '-0.025em',
          }}
        >
          Todo List
        </Typography>
        <Typography
          variant='body2'
          component='span'
          sx={{
            color: 'text.secondary',
            textTransform: 'uppercase',
            fontWeight: 700,
          }}
        >
          Developer Workspace
        </Typography>
      </Box>
    </Box>
  )
}
