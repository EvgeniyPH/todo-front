import { Box } from '@mui/material'
import Header from '@/components/Header'
import Todos from '@/components/Todos'

export default function Home() {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
      }}
    >
      <Header />
      <Box
        component={'main'}
        sx={{
          flex: 1,
          overflowY: 'auto',
          padding: '2rem',
        }}
      >
        <Todos />
      </Box>
    </Box>
  )
}
