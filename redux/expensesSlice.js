import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

const initialState = {
  expenses: [],
};

const expensesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setExpenses: (state, action) => {
      const invertedArray = action.payload.reverse();
      state.expenses = invertedArray;
    },
    addExpense: (state, action) => {
      //const id = uuid.v4();
      state.expenses = [action.payload, ...state.expenses];
    },
    updateExpense: (state, action) => {
      const updatedExpenseIndex = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatedExpense = state.expenses[updatedExpenseIndex];
      const updatedItem = { ...updatedExpense, ...action.payload };
      state.expenses[updatedExpenseIndex] = updatedItem;
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
  },
});

export const allExpenses = (state) => state.expenses.expenses;
export const { deleteExpense, addExpense, updateExpense, setExpenses} = expensesSlice.actions;
export default expensesSlice.reducer;
