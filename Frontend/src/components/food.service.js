import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const foodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  endpoints: (build) => ({
    getFood: build.query({
      query: () => 'food'
    })
  })
})

export const { useGetFoodQuery } = foodApi
