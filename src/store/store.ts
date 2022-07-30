import { configureStore } from '@reduxjs/toolkit'
import travelReducer from './slices/travels'

export const store = configureStore({
  reducer: {
    travels: travelReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
