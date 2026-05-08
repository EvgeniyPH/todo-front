import { Box } from '@mui/material'
import Sidebar from '@/components/Sidebar'
import MemberRoute from '@/components/common/MemberRoute'
import { FilterTodoContext } from '@/components/common/FilterTodoContext'

export default function MemberLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <MemberRoute>
      <FilterTodoContext>
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
            {children}
          </Box>
        </Box>
      </FilterTodoContext>
    </MemberRoute>
  )
}
