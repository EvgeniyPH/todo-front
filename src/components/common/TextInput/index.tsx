import { ChangeEventHandler, useState } from 'react'
import { Controller, FieldErrors, FieldPathValue, FieldValues, Path, UseControllerProps } from 'react-hook-form'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import { InputAdornment, SvgIcon, Box } from '@mui/material'
import TextField, { StandardTextFieldProps } from '@mui/material/TextField'

interface TextInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>
  extends UseControllerProps<TFieldValues, TName>, StandardTextFieldProps {
  disabled?: boolean
  label?: string
  placeholder?: string
  name: TName
  defaultValue?: FieldPathValue<TFieldValues, TName>
  customErrorMessage?: string
  onBlurHandler?: () => void
  errors?: FieldErrors<FieldValues>
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const TextInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({
  control,
  errors,
  name,
  label,
  customErrorMessage,
  autoFocus,
  onBlurHandler,
  disabled,
  size = 'medium',
  type,
  onChange,
  sx,
  slotProps,
  ...rest
}: TextInputProps<TFieldValues, TName>) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange: rhfOnChange, value, name, ref, onBlur } }) => (
        <TextField
          {...rest}
          onChange={onChange ?? rhfOnChange}
          value={value ?? ''}
          name={name}
          inputRef={ref}
          label={label ?? ''}
          onBlur={onBlurHandler ?? onBlur}
          autoFocus={autoFocus}
          error={!!errors?.[name] || !!customErrorMessage}
          helperText={customErrorMessage !== undefined ? customErrorMessage : (errors?.[name]?.message as string)}
          size={size}
          disabled={disabled}
          type={type === 'password' ? (isPasswordHidden ? 'password' : 'text') : type}
          sx={{
            ...sx,
          }}
          slotProps={{
            input: {
              endAdornment:
                type === 'password' ? (
                  <InputAdornment position='end'>
                    <Box
                      sx={{
                        display: 'flex',
                        pl: '16px',
                        py: '4px',
                        cursor: 'pointer',
                      }}
                      onClick={() => setIsPasswordHidden(prev => !prev)}
                    >
                      {isPasswordHidden ? (
                        <SvgIcon
                          component={VisibilityOffIcon}
                          sx={{
                            width: '20px',
                            height: '20px',
                            color: 'text.secondary',
                          }}
                          inheritViewBox
                        />
                      ) : (
                        <SvgIcon
                          component={VisibilityIcon}
                          sx={{
                            width: '20px',
                            height: '20px',
                            color: 'text.secondary',
                          }}
                          inheritViewBox
                        />
                      )}
                    </Box>
                  </InputAdornment>
                ) : undefined,
            },
            ...slotProps,
          }}
        />
      )}
    />
  )
}

export default TextInput
