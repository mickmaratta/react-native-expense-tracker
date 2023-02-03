import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { useSelector } from 'react-redux'
import { allExpenses } from "../redux/expensesSlice";
import { getDateMinusDays } from '../util/date';


const RecentExpensesScreen = () => {
  const expenses = useSelector(allExpenses)
  const recentExpenses = expenses.filter((e) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return e.date >= date7DaysAgo;
  });

  return (
    <ExpensesOutput expensePeriod='Last 7 Days' expenses={recentExpenses} fallbackText='No expenses in the last 7 days'/>
  )
}

export default RecentExpensesScreen

const styles = StyleSheet.create({})