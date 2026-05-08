import { Box } from '@mui/material'
import Header from '@/components/Header'
import Todos from '@/components/Todos'

export default function TodoPage() {
  return (
    <>
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
    </>
  )
}
