import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: ''
}
const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {}
})

const foodReducer = foodSlice.reducer
export default foodReducer
