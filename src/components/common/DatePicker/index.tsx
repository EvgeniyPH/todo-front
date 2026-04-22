'use client'

import React from 'react'
import { Controller, FieldPathValue, FieldValues, Path, UseControllerProps } from 'react-hook-form'

import { SvgIcon } from '@mui/material'
import { DesktopDatePicker, DesktopDatePickerProps } from '@mui/x-date-pickers'

import CalendarIcon from '@mui/icons-material/CalendarMonth'

interface Props<TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>>
  extends UseControllerProps<TFieldValues, TName>, DesktopDatePickerProps {
  label?: string
  readonly?: boolean
  disableHighlightToday?: boolean
  disableFuture?: boolean
  disablePast?: boolean
  disabled?: boolean
  defaultValue?: FieldPathValue<TFieldValues, TName>
  name: TName
  size?: 'small' | 'medium'
}

const DatePicker = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({
  control,
  name,
  label,
  readonly,
  disabled,
  size,
  views = ['year', 'month', 'day'],
  format = 'dd.MM.yyyy',
  slots,
  slotProps,
  ...rest
}: Props<TFieldValues, TName>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState }) => {
        return (
          <DesktopDatePicker
            label={label}
            value={value}
            onChange={onChange}
            readOnly={readonly}
            disabled={disabled}
            {...rest}
            views={views} // Ensures full date selection view
            format={format} // Display format for the picker
            slots={{
              ...slots,
              openPickerIcon: () => (
                <SvgIcon
                  component={CalendarIcon}
                  inheritViewBox
                  sx={theme => ({
                    width: '24px',
                    height: '24px',
                    fill: theme.palette.primary.main,
                  })}
                />
              ),
            }}
            slotProps={{
              ...slotProps,
              textField: {
                size,
                error: !!fieldState.error,
                helperText: fieldState.error?.message,
              },
            }}
          />
        )
      }}
    />
  )
}

export default DatePicker
