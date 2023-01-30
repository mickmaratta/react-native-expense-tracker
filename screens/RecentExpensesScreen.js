import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const RecentExpensesScreen = () => {
  return (
    <ExpensesOutput expensePeriod='Last 7 Days'/>
  )
}

export default RecentExpensesScreen

const styles = StyleSheet.create({})