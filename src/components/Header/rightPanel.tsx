'use client'

import React from 'react'

import { Box, Drawer, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import TodoEdit from '@/components/Todos/TodoEdit'

export default function HeaderRightPanel() {
  const [open, setOpen] = React.useState(false)

  const closeDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <>
      <Button
        size='small'
        variant='contained'
        color='primary'
        startIcon={<AddIcon />}
        sx={{ fontSize: '1rem' }}
        onClick={() => setOpen(true)}
      >
        Create
      </Button>
      <Drawer anchor='right' open={open} onClose={closeDrawer(false)}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '512px',
            width: '100%',
            height: '100%',
            backgroundColor: '#0c0c0f',
          }}
        >
          <TodoEdit toOpen={setOpen} />
        </Box>
      </Drawer>
    </>
  )
}
