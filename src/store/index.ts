import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authSliceReducer from '@/store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { baseApi } from '@/api/api'
import { errorLogger } from '@/api/middlewareApi'

const rootReducers = combineReducers({
  auth: authSliceReducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  blacklist: [baseApi.reducerPath], // Exclude api from persistence
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware, errorLogger),
})

const persistor = persistStore(store)

export { store, persistor }

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
