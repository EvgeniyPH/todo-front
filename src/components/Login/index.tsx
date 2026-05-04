'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Typography, Button, Divider } from '@mui/material'
import { textInputStyle, labelInputStyle } from '@/theme/styles'
import TextInput from '@/components/common/TextInput'
import { SCHEMA } from './validation'

export const LoginForm = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(SCHEMA),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = handleSubmit(({ email, password }) => {
    if (isValid) {
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
        gap: '1.25rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant='body2' component={'label'} sx={labelInputStyle}>
          Email Address
        </Typography>
        <TextInput
          control={control}
          errors={errors}
          name='email'
          placeholder='Enter email address'
          size='small'
          sx={textInputStyle}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant='body2' component={'label'} sx={labelInputStyle}>
          Password
        </Typography>
        <TextInput
          control={control}
          errors={errors}
          name='password'
          placeholder='••••••••'
          type='password'
          size='small'
          sx={textInputStyle}
        />
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
          }}
        >
          <Typography variant='body1' sx={{ color: 'primary.main' }}>
            <Link href='/reset-password'>Forgot password?</Link>
          </Typography>
        </Box>
        <Button type='submit' size='small' variant='contained' color='primary' sx={{ fontSize: '1rem' }} fullWidth>
          Sign In
        </Button>
      </Box>
      <Divider
        sx={{
          marginTop: '0.75rem',
          backgroundColor: 'rgba(39, 39, 42, 0.65)',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '1.5rem',
          fontSize: '0.875rem',
          color: '#a1a1aa',
        }}
      >
        Don&apos;t have an account?{' '}
        <Typography variant='body1' sx={{ color: 'primary.main', marginLeft: '0.2rem' }}>
          <Link href='/sign-up'>Sign Up</Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default LoginForm
