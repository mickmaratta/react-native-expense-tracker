import { StyleSheet, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2023-1-14'),
    },
    {
        id: 'e2',
        description: 'Pants',
        amount: 79.99,
        date: new Date('2023-1-4'),
    },
    {
        id: 'e3',
        description: 'Groceries',
        amount: 30.74,
        date: new Date('2023-1-29'),
    },
    {
        id: 'e4',
        description: 'Book',
        amount: 20.25,
        date: new Date('2022-12-29'),
    },
    {
        id: 'e5',
        description: 'Movie',
        amount: 24.95,
        date: new Date('2022-1-7'),
    },
]
const ExpensesOutput = ({ expenses, expensePeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expensePeriod={expensePeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 0,
  }
});
