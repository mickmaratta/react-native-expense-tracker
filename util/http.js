import axios from "axios";

const BACKEND_URL =
  "https://react-native-expense-tra-d85ac-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const res = await axios.post(BACKEND_URL + "/expenses.json", expenseData);
  const id = res.data.name;
  return id;
}

export async function fetchExpenses() {
  const res = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];
  for (const key in res.data) {
    const expenseObj = {
      id: key,
      amount: res.data[key].amount,
      date: res.data[key].date,
      description: res.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
};

export async function updateDatabaseExpense(id, expenseData) {
    return await axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
};

export async function deleteDatabaseExpense(id) {
    return await axios.delete(BACKEND_URL + `/expenses/${id}.json`);
};
