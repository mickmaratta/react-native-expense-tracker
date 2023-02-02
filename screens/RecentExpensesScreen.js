import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { useSelector } from 'react-redux'

const RecentExpensesScreen = () => {
  const allExpenses = useSelector((state) => state.expenses.expenses)

  return (
    <ExpensesOutput expensePeriod='Last 7 Days' expenses={allExpenses}/>
  )
}

export default RecentExpensesScreen

const styles = StyleSheet.create({})