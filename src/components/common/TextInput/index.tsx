import { ChangeEventHandler } from 'react'
import { Controller, FieldErrors, FieldPathValue, FieldValues, Path, UseControllerProps } from 'react-hook-form'

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
  ...rest
}: TextInputProps<TFieldValues, TName>) => {
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
          type={type}
          sx={{
            ...sx,
          }}
        />
      )}
    />
  )
}

export default TextInput
