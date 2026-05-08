'use client'

import { FC } from 'react'

import {
  Autocomplete,
  AutocompleteProps,
  TextField,
  Chip,
  createFilterOptions,
} from '@mui/material'

export interface AutocompleteOption {
  label: string
  value?: string | number
  disabled?: boolean
  inputValue?: string
}
const filter = createFilterOptions<AutocompleteOption>()
interface Props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extends Omit<AutocompleteProps<any, any, any, any>, 'options' | 'renderInput' | 'onChange'> {
  borderRadius?: number
  width?: string
  label?: string
  options: AutocompleteOption[]
  onChange: (value: AutocompleteOption[]) => void
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
      onChange={(event, newValue: AutocompleteOption[] | string[]) => {
        newValue = newValue.map(value => {
          if (typeof value === 'string') {
            return { label: value }
          }
          return value
        })
        onChange(newValue)
      }}
      getOptionLabel={option => {
        if (typeof option === 'string') {
          return option
        }
        if (option.inputValue) {
          return option.inputValue
        }
        return option.label
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params)

        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue ? `Add new tag "${params.inputValue}"` : '',
            label: params.inputValue,
          })
        }

        return filtered
      }}
      loading={loading}
      {...rest}
      renderValue={(value: readonly AutocompleteOption[] | string[], getItemProps) =>
        value.map((option: AutocompleteOption | string, index: number) => {
          const { ...itemProps } = getItemProps({ index })
          return (
            <Chip
              {...itemProps}
              variant='outlined'
              label={typeof option === 'string' ? option : option.label}
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
