import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice/counterSlice'
import todoReducer from './slices/todoSlice/todoSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
})