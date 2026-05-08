'use client'

import AxiosInterceptor from '@/api'
import { persistor, store } from '@/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AxiosInterceptor />
        {children}
      </PersistGate>
    </Provider>
  )
}

export default StoreProvider
