import { Box } from '@mui/material'
import Header from '@/components/Header'
import Todos from '@/components/Todos'
import { FilterTodoContext } from '@/components/common/FilterTodoContext'

export default function TodoPage() {
  return (
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
  )
}
