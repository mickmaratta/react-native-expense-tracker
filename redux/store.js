import { configureStore } from '@reduxjs/toolkit'
import expensesSlice from './expensesSlice'

export default configureStore({
  reducer: {
    expenses: expensesSlice,
  },
})