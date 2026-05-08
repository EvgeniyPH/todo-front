'use client'

import theme from '@/theme/theme'
import { ReactNode } from 'react'
import { SnackbarProvider } from 'notistack'
import CssBaseline from '@mui/material/CssBaseline'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import StoreProvider from '@/components/common/StoreProvider'

const WrapperClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      <SnackbarProvider maxSnack={5} preventDuplicate>
        <AppRouterCacheProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </LocalizationProvider>
        </AppRouterCacheProvider>
      </SnackbarProvider>
    </StoreProvider>
  )
}

export default WrapperClientProviders
