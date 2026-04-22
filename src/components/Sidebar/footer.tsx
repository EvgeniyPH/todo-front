import { Box, Typography, Avatar } from '@mui/material'

export default function SidebarFooter() {
  return (
    <Box sx={{ marginTop: 'auto', padding: '1rem' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem',
          backgroundColor: 'rgba(24, 24, 27, 0.3)',
          border: '1px solid rgba(39, 39, 42, 0.5)',
          borderRadius: '0.5rem',
        }}
      >
        <Avatar
          src={
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCY36stnrru-2Chu2-RP1NwfSx5fbnTXHBPFKB3YirY6ekBqqWdcCw248mbeG-3C8uC_BHjFgKah6nXyO4PLX226dZPc1bCb8y6aMYHXmi_Bx5nv25mVJYUl4E0Un8X1rab-tOcR41l8Vc4_EhlcDdF-q5eSYecYztm0qc5wqo7Anneroua_2aIzK38YtmgYd00uwnk8CdbNUDNlCo0SoXmIvmfy6_VPj-XBzm2b3A_YeHjYFvcJjzDUbjsajYL0gPrNEaTpgyUSE_q'
          }
          alt={'User profile'}
          sx={{
            width: '2rem',
            height: '2rem',
            border: '1px solid #3f3f46',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              fontSize: '0.75rem',
              color: 'primary.text',
              fontWeight: 700,
            }}
          >
            Evgeniy
          </Typography>
          <Typography
            sx={{
              fontSize: '10px',
              color: 'secondary.text',
            }}
          >
            Pro Account
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
