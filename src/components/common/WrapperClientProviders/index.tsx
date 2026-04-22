'use client'

import { persistor, store } from '@/store'
import theme from '@/theme/theme'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { Box } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { PersistGate } from 'redux-persist/integration/react'

import Sidebar from '@/components/Sidebar'

const WrapperClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouterCacheProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box sx={{ display: 'flex', height: '100vh', width: '100%' }}>
                <Sidebar />
                {children}
              </Box>
            </ThemeProvider>
          </LocalizationProvider>
        </AppRouterCacheProvider>
      </PersistGate>
    </Provider>
  )
}

export default WrapperClientProviders
