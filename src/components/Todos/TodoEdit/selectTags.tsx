'use select'

import { Typography, Box } from '@mui/material'
import { FieldErrors, FieldValues } from 'react-hook-form'

import { CustomAutocomplete } from '@/components/common/Autocomplete'
import { textInputStyle } from '@/theme/styles'
import { useAppSelector } from '@/store'
import { selectFilterTags } from '@/store/tagSlice'

interface Props {
  // tags: string[] | null | undefined
  handleSetTags: (tags: string) => void
  tagValidationError: FieldErrors<FieldValues>
}

export const SelectTags = ({ handleSetTags, tagValidationError }: Props) => {
  const tagsList = useAppSelector(state => selectFilterTags(state, '')) //['backend', 'frontend', 'design', 'ux-backend', 'security', 'ux-ui', 'dev']

  const onChange = (data: string[] | null) => {
    handleSetTags(data?.join(',') || '')
  }

  return (
    <Box sx={{ width: '100%' }}>
      <CustomAutocomplete
        options={tagsList ?? []}
        onChange={onChange}
        error={!!tagValidationError.tags?.message}
        size='small'
        multiple
        freeSolo
        sx={textInputStyle}
      />
      {tagValidationError.tags && (
        <Typography variant='body2' color='error' sx={{ fontSize: '0.855rem' }}>
          {tagValidationError.tags.message as string}
        </Typography>
      )}
    </Box>
  )
}
