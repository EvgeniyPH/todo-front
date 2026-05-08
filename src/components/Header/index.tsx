'use client'

// import { ChangeEvent } from 'react'
import { Box, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import HeaderRightPanel from './rightPanel'
import { textInputStyle } from '@/theme/styles'
import { useFilterTodoContext } from '@/components/common/FilterTodoContext'
import TextInput from '@/components/common/TextInput'
import { useForm } from 'react-hook-form'

export default function Header() {
  const { filters, setFilters } = useFilterTodoContext()

  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      title: filters.title || '',
    },
  })

  const onSubmit = handleSubmit(({ title }) => {
    setFilters({
      ...filters,
      title: title,
    })
  })

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
          component='form'
          noValidate
          onSubmit={onSubmit}
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '420px',
          }}
        >
          <TextInput
            control={control}
            fullWidth
            size='small'
            placeholder='Search todo...'
            // type='search'
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
            rows={10}
            name='title'
            sx={{ ...textInputStyle, '& .MuiOutlinedInput-root': { paddingRight: '3px' } }}
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
