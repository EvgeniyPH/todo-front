import React from 'react'

import { CircularProgress, SxProps, Box, Typography } from '@mui/material'

interface Props {
  wrapperSx?: SxProps
}

export const Loading = ({ wrapperSx }: Props) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '600px',
        ...wrapperSx,
      }}
    >
      <Typography variant='h6' sx={{ marginBottom: 2 }}>
        Loading...
      </Typography>
      <CircularProgress />
    </Box>
  )
}
