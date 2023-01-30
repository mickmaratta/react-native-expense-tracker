import { StyleSheet } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const AllExpensesScreen = () => {
  return (
    <ExpensesOutput expensePeriod="Total" />
  )
}

export default AllExpensesScreen

const styles = StyleSheet.create({})