'use client'

import { persistor, store } from '@/store'
import theme from '@/theme/theme'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import CssBaseline from '@mui/material/CssBaseline'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { PersistGate } from 'redux-persist/integration/react'

const WrapperClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouterCacheProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </LocalizationProvider>
        </AppRouterCacheProvider>
      </PersistGate>
    </Provider>
  )
}

export default WrapperClientProviders
