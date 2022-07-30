import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Ticket } from './api'

export const travelApi = createApi({
  reducerPath: 'travelApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62d085741cc14f8c088b8a7b.mockapi.io/api/v1/' }),
  endpoints: (builder) => ({
    getTravelList: builder.query<Ticket[], void>({
      query: () => 'ticket'
    }),
    getTravelById: builder.query<Ticket, string>({
      query: (name) => `ticket/${name}`
    })
  })
})

export const { useGetTravelByIdQuery, useGetTravelListQuery: useGetTravelList } = travelApi
