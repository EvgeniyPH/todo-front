'use client'

import { FC } from 'react'

import { Autocomplete, AutocompleteProps, TextField, Chip } from '@mui/material'

interface Props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extends Omit<AutocompleteProps<any, any, any, any>, 'options' | 'renderInput' | 'onChange'> {
  borderRadius?: number
  width?: string
  label?: string
  options: string[]
  onChange: (value: string[]) => void
  error?: boolean
}

export const CustomAutocomplete: FC<Props> = ({
  sx,
  label,
  onChange,
  options,
  size = 'medium',
  loading,
  error,
  ...rest
}) => {
  return (
    <Autocomplete
      fullWidth
      options={options}
      onChange={(event, newValue) => onChange(newValue)}
      getOptionLabel={option => option || ''}
      loading={loading}
      {...rest}
      renderValue={(value: readonly string[], getItemProps) =>
        value.map((option: string, index: number) => {
          const { ...itemProps } = getItemProps({ index })
          return (
            <Chip
              {...itemProps}
              variant='outlined'
              label={option}
              key={index}
              sx={{
                border: '1px solid #27272a',
                fontSize: '0.6rem',
                paddingX: '0.5rem',
                height: '1.7rem',
                '& .MuiSvgIcon-root': {
                  margin: '0 0 0 5px',
                },
              }}
            />
          )
        })
      }
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          size={size}
          error={error ?? false}
          placeholder='Add tag...'
          sx={{
            ...sx,
          }}
        />
      )}
    />
  )
}
