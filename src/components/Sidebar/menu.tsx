'use client'

import { Box, Typography, Link, SvgIcon, Divider } from '@mui/material'
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined'
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
// import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import { logOut } from '@/store/authSlice'
import { useAppDispatch } from '@/store'
import { useFilterTodoContext } from '@/components/common/FilterTodoContext'

const menuItems = [
  {
    label: 'All Tasks',
    href: '#',
    icon: ListAltOutlinedIcon,
    status: '',
  },
  {
    label: 'Active',
    href: '#',
    icon: RadioButtonUncheckedOutlinedIcon,
    status: 'active',
  },
  {
    label: 'Completed',
    href: '#',
    icon: CheckCircleOutlinedIcon,
    status: 'completed',
  },
  // {
  //   label: 'Priority',
  //   href: '#',
  //   icon: ErrorOutlinedIcon,
  // },
]

export default function SidebarMenu() {
  const dispatch = useAppDispatch()
  const { filters, setFilters } = useFilterTodoContext()

  const handleLogout = () => {
    dispatch(logOut())
  }

  const handleFilterMenu = (status: string) => {
    setFilters({
      ...filters,
      status: status,
    })
  }

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
          onClick={e => {
            e.preventDefault()
            handleFilterMenu(item.status)
          }}
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
            item.status === filters.status && {
              backgroundColor: '#18181b',
              color: '#a78bfa',
              borderLeft: '2px solid #a78bfa',
              opacity: 0.9,
              transform: 'scale(0.99)',
            },
            item.status !== filters.status && {
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
      <Divider
        sx={{
          margin: '1rem 0 1rem 0',
          backgroundColor: '#27272a',
        }}
      />
      <Link
        href='#'
        onClick={handleLogout}
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
            color: '#a1a1aa',
            '&:hover': {
              color: '#fafafa',
              backgroundColor: 'rgba(24, 24, 27, 0.5)',
            },
          },
        ]}
      >
        <SvgIcon component={LogoutIcon} inheritViewBox sx={{ fontSize: '1.25rem' }} />

        <Typography
          component='span'
          variant='body1'
          sx={{
            fontSize: '0.875rem',
            fontWeight: 500,
          }}
        >
          Logout
        </Typography>
      </Link>
    </Box>
  )
}
