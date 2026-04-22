import { Box, Typography, Link, SvgIcon } from '@mui/material'
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined'
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'

const menuItems = [
  {
    label: 'All Tasks',
    href: '#',
    icon: ListAltOutlinedIcon,
    isActive: true,
  },
  {
    label: 'Active',
    href: '#',
    icon: RadioButtonUncheckedOutlinedIcon,
    isActive: false,
  },
  {
    label: 'Completed',
    href: '#',
    icon: CheckCircleOutlinedIcon,
    isActive: false,
  },
  {
    label: 'Priority',
    href: '#',
    icon: ErrorOutlinedIcon,
    isActive: false,
  },
]

export default function SidebarMenu() {
  return (
    <Box
      component='nav'
      sx={{
        flex: 1,
        padding: '0 0.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
      }}
    >
      {menuItems.map(item => (
        <Link
          key={item.label}
          href='#'
          underline='none'
          sx={[
            {
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.5rem 0.75rem',
              borderRadius: '0.25rem',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'all 150ms',
            },
            item.isActive && {
              backgroundColor: '#18181b',
              color: '#a78bfa',
              borderLeft: '2px solid #a78bfa',
              opacity: 0.9,
              transform: 'scale(0.99)',
            },
            !item.isActive && {
              color: '#a1a1aa',
              '&:hover': {
                color: '#fafafa',
                backgroundColor: 'rgba(24, 24, 27, 0.5)',
              },
            },
          ]}
        >
          <SvgIcon component={item.icon} inheritViewBox sx={{ fontSize: '1.25rem' }} />

          <Typography
            component='span'
            variant='body1'
            sx={{
              fontSize: '0.875rem',
              fontWeight: 500,
            }}
          >
            {item.label}
          </Typography>
        </Link>
      ))}
    </Box>
  )
}
