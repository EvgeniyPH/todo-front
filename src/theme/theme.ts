'use client'

import { createTheme } from '@mui/material/styles'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import { palette } from './palette'

const theme = createTheme({
  cssVariables: true,
  palette,
  typography: {
    fontFamily: 'var(--font-geist-sans), sans-serif',
    h1: { fontWeight: 900 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    subtitle1: { fontWeight: 600 },
    subtitle2: { fontWeight: 600, fontSize: '1rem' },
    body1: { fontWeight: 500, fontSize: '0.875rem' },
    body2: { fontWeight: 500, fontSize: '0.75rem' },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          lineHeight: 1.6,
          variants: [
            {
              props: { variant: 'contained' },
              style: {
                // color: palette.text.secondary,
              },
            },
          ],
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: '2px',
          color: palette.primary.main,
          variants: [
            {
              props: { size: 'small' },
              style: {
                '& .MuiSvgIcon-root': {
                  fontSize: '1.75rem',
                },
              },
            },
          ],
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.default,
          border: '1px solid #27272a',
          variants: [
            {
              props: { variant: 'outlined' },
              style: {},
            },
          ],
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(4px)',
          '& .MuiDrawer-paper': {
            backgroundColor: palette.background.default,
            borderLeft: '1px solid #27272a',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '0.855rem',
          margin: '0.6rem 0 0',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          padding: '0.25rem 0.75rem',
          borderRadius: '0.25rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          variants: [
            {
              props: { variant: 'outlined' },
              style: {
                backgroundColor: '#18181b',
              },
            },
            {
              props: { size: 'small' },
              style: {
                fontSize: '0.65rem',
                fontWeight: 700,
              },
            },
          ],
        },
        label: {
          padding: 'initial',
        },
        icon: {
          fontSize: '14px',
          color: '#a1a1aa',
          marginLeft: '-2px',
          marginRight: 5,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#18181b',
          border: '1px solid #27272a',
          fontSize: '0.855rem',
        },
      },
    },
    MuiDatePicker: {
      defaultProps: {
        displayWeekNumber: false,
      },
    },
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          backgroundColor: '#18181b',
          border: '1px solid #27272a',
          color: '#d4d4d8',
          borderRadius: '5px',
          fontSize: '0.855rem',
        },
      },
    },
    MuiPickersTextField: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          '& .MuiPickersOutlinedInput-root': {
            '&:focus': {
              borderColor: palette.primary.main,
              boxShadow: `0 0 0 1px ${palette.primary.main}`,
            },
            '&:hover fieldset': {
              borderColor: palette.primary.main,
            },
          },
          '& .MuiPickersInputBase-root': {
            backgroundColor: '#18181b',
            border: '1px solid #27272a',
          },
        },
      },
    },
    MuiPickerDay: {
      styleOverrides: {
        root: {
          fontSize: '0.855rem',
        },
        today: {
          borderRadius: '70px',
          borderColor: palette.primary.main,
          border: '0px solid',
          backgroundColor: '#a78bfa55',
        },
      },
    },
    MuiDayCalendar: {
      styleOverrides: {
        root: {
          color: '#bbdefb',
          fontSize: '1rem',
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          '& .MuiPickersArrowSwitcher-button': {
            color: '#d4d4d8',
            fontSize: '1rem',
          },
        },
        labelContainer: {
          color: '#d4d4d8',
          fontSize: '1rem',
        },
        switchViewButton: {
          color: '#d4d4d8',
          fontSize: '1rem',
        },
      },
    },
  },
})

export default theme
