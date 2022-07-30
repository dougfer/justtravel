import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Ticket } from 'src/service'

const initialState: Ticket[] = []

export const travelSlice = createSlice({
  name: 'travelList',
  initialState,
  reducers: {
    incrementList: (state, action: PayloadAction<Ticket[]>) => {
      state.push(...action.payload)
    }
  }
})

export const { incrementList } = travelSlice.actions

export default travelSlice.reducer
