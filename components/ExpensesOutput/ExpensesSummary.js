import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ExpensesSummary = ({ expensePeriod, expenses }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0);

  return (
    <View>
      <Text>{expensePeriod}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({});
