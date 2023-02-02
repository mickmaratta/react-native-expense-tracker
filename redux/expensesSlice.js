import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [
    {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2022-12-29"),
    },
    {
      id: "e2",
      description: "Pants",
      amount: 79.99,
      date: new Date("2022-12-29"),
    },
    {
      id: "e3",
      description: "Groceries",
      amount: 30.74,
      date: new Date("2022-12-29"),
    },
    {
      id: "e4",
      description: "Book",
      amount: 20.25,
      date: new Date("2022-12-29"),
    },
    {
      id: "e5",
      description: "Movie",
      amount: 24.95,
      date: new Date("2022-12-29"),
    },
  ],
};
const expensesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    deleteExpense: (state, action) => {
      const index = state.expenses.findIndex(
        (item) => item.id === action.payload.id
      );
      state.expenses.splice(index, 1)
    },
  },
});

export const allExpenses = (state) => state.expenses.expenses;
export const { deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
