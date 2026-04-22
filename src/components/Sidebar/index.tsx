import { Box } from '@mui/material'
import SidebarMenu from './menu'
import SidebarBrand from './brand'
import SidebarFooter from './footer'

export default function Sidebar() {
  return (
    <Box
      component='aside'
      sx={{
        width: '256px',
        borderRight: '1px solid #27272a',
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem 0',
        flexShrink: 0,
      }}
    >
      <SidebarBrand />
      <SidebarMenu />
      <SidebarFooter />
    </Box>
  )
}
