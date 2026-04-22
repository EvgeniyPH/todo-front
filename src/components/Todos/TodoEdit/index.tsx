'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { format } from 'date-fns'

import { Box, Typography, IconButton, Button, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import TextInput from '@/components/common/TextInput'
import DatePicker from '@/components/common/DatePicker'
import PriorityElement from './priorityElement'
import { SelectTags } from './selectTags'
import { SCHEMA } from './validation'
import { textInputStyle, labelInputStyle } from '@/theme/styles'
import { useAppDispatch } from '@/store'
import { addTodo } from '@/store/todoSlice'
import { addTags } from '@/store/tagSlice'
import { Priority, Tag } from '@/types/Todo'

interface Props {
  toOpen: (open: boolean) => void
}

export default function TodoEdit({ toOpen }: Props) {
  const dispatch = useAppDispatch()
  const currentDay = format(new Date(), 'yyyy-MM-dd')

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
    getValues,
    trigger,
    watch,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(SCHEMA),
    defaultValues: {
      title: '',
      description: '',
      dueDate: '',
      priority: '',
      tags: '',
    },
  })

  const formPriority = watch('priority')

  const handleSetPriority = (priority: Priority) => {
    setValue('priority', priority)
    trigger('priority')
  }

  const handleSetTags = (tags: string) => {
    setValue('tags', tags)
    trigger('tags')
  }

  const onSubmit = handleSubmit(() => {
    if (isValid) {
      const values = getValues()
      const tags: Tag[] = values.tags ? values.tags.split(',') : []

      dispatch(
        addTodo({
          id: Date.now(),
          title: values.title,
          completed: false,
          tags: tags,
          description: values.description,
          priority: values.priority as Priority,
          dueDate: values.dueDate ? format(values.dueDate, 'yyyy-MM-dd') : currentDay,
        }),
      )
      dispatch(addTags(tags))

      toOpen(false)
    }
  })

  return (
    <Box
      component='form'
      noValidate
      onSubmit={onSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        sx={{
          height: '80px',
          padding: '0 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #27272a',
        }}
      >
        <Typography
          variant='h2'
          component={'h2'}
          sx={{
            fontSize: '20px',
            fontWeight: 900,
          }}
        >
          Create New Todo
        </Typography>
        <IconButton sx={{ color: 'primary.text' }} aria-label='delete' size='small' onClick={() => toOpen(false)}>
          <CloseIcon sx={{ fontSize: '1.25rem' }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          flex: 1,
          padding: '40px 32px',
          overflowY: 'auto',
        }}
      >
        <Box sx={{ marginBottom: '40px' }}>
          <Typography variant='body2' component={'label'} sx={labelInputStyle}>
            Todo Title
          </Typography>
          <TextInput
            control={control}
            errors={errors}
            name='title'
            placeholder='What needs to be done?'
            variant='standard'
            sx={{
              width: '100%',
              '& .MuiInputBase-input': {
                fontSize: '1.4rem',
                fontWeight: 900,
                '&::placeholder': {
                  color: '#4e4e52',
                },
              },
            }}
          />
        </Box>
        <PriorityElement formPriority={formPriority} setPriority={handleSetPriority} errors={errors} />
        <Grid container spacing={3} sx={{ paddingTop: '40px' }}>
          <Grid size={{ xs: 12 }}>
            <Typography variant='body2' component={'label'} sx={labelInputStyle}>
              Due Date
            </Typography>
            <DatePicker control={control} name='dueDate' size='small' minDate={new Date()} sx={{ width: '100%' }} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography variant='body2' component={'label'} sx={labelInputStyle}>
              Tags
            </Typography>
            <SelectTags handleSetTags={handleSetTags} tagValidationError={errors} />
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ paddingTop: '40px' }}>
          <Grid size={{ xs: 12 }}>
            <Typography variant='body2' component={'label'} sx={labelInputStyle}>
              Description
            </Typography>
            <TextInput
              control={control}
              errors={errors}
              name='description'
              placeholder='Provide detailed context, acceptance criteria, or code snippets...'
              size='small'
              multiline
              rows={6}
              sx={textInputStyle}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          padding: '24px 32px',
          borderTop: '1px solid #27272a',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button size='small' variant='text' color='primary' sx={{ fontSize: '1rem' }} onClick={() => toOpen(false)}>
          Cancel
        </Button>
        <Button type='submit' size='small' variant='contained' color='primary' sx={{ fontSize: '1rem' }}>
          Save Todo
        </Button>
      </Box>
    </Box>
  )
}
