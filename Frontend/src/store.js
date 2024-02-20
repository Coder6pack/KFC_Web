import { configureStore } from '@reduxjs/toolkit'
import foodReducer from './components/food.slice'
import { foodApi } from './components/food.service'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    food: foodReducer,
    [foodApi.reducerPath]: foodApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(foodApi.middleware)
})

setupListeners(store.dispatch)
