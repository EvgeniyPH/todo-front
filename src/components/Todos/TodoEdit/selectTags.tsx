'use select'

import { useMemo } from 'react'
import { Typography, Box } from '@mui/material'
import { FieldErrors, FieldValues } from 'react-hook-form'

import { CustomAutocomplete, AutocompleteOption } from '@/components/common/Autocomplete'
import { textInputStyle } from '@/theme/styles'
import { useGetTagListQuery } from '@/services/tag/api'

interface Props {
  handleSetTags: (tags: AutocompleteOption[]) => void
  tagValidationError: FieldErrors<FieldValues>
}

export const SelectTags = ({ handleSetTags, tagValidationError }: Props) => {
  const { data: tagsList } = useGetTagListQuery()

  const onChange = (data: AutocompleteOption[] | null) => {
    handleSetTags(data || [])
  }

  const tagsOptions = useMemo(
    () =>
      tagsList?.tags.map(tag => ({
        value: tag.id as number,
        label: tag.name,
      })),
    [tagsList],
  )

  return (
    <Box sx={{ width: '100%' }}>
      <CustomAutocomplete
        options={tagsOptions ?? []}
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
