import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

const initialState = {
  expenses: [
    {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2023-02-02").getTime(),
    },
    {
      id: "e2",
      description: "Pants",
      amount: 79.99,
      date: new Date("2022-12-29").getTime(),
    },
    {
      id: "e3",
      description: "Groceries",
      amount: 30.74,
      date: new Date("2022-12-29").getTime(),
    },
    {
      id: "e4",
      description: "Book",
      amount: 20.25,
      date: new Date("2022-12-29").getTime(),
    },
    {
      id: "e5",
      description: "Movie",
      amount: 24.95,
      date: new Date("2022-12-29").getTime(),
    },
  ],
};
const expensesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const id = uuid.v4();
      state.expenses = [{ id: id, ...action.payload }, ...state.expenses];
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
export const { deleteExpense, addExpense, updateExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
