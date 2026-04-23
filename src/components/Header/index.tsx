'use client'

import { ChangeEvent } from 'react'
import { Box, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import HeaderRightPanel from './rightPanel'
import { textInputStyle } from '@/theme/styles'
import { useFilterTodoContext } from '@/components/common/FilterTodoContext'

export default function Header() {
  const { setFilterTodo } = useFilterTodoContext()
  const search = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterTodo(event.target.value)
  }
  return (
    <Box
      component={'header'}
      sx={{
        height: '3.5rem',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #27272a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
      }}
    >
      <Box
        sx={{
          width: '100%',
          paddingRight: '50px',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '420px',
          }}
        >
          <TextField
            fullWidth
            size='small'
            placeholder='Search todo...'
            variant='outlined'
            rows={10}
            onChange={search}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon
                      sx={{
                        fontSize: '14px',
                        color: 'text.secondary',
                      }}
                    />
                  </InputAdornment>
                ),
              },
            }}
            sx={textInputStyle}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexShrink: 0,
        }}
      >
        <HeaderRightPanel />
      </Box>
    </Box>
  )
}
