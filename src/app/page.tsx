import { Box } from '@mui/material'
import Header from '@/components/Header'
import Todos from '@/components/Todos'
import Sidebar from '@/components/Sidebar'
import { FilterTodoContext } from '@/components/common/FilterTodoContext'

export default function Home() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100%' }}>
      <Sidebar />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
        }}
      >
        <FilterTodoContext>
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
        </FilterTodoContext>
      </Box>
    </Box>
  )
}
