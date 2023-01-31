import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles"

const ExpensesSummary = ({ expensePeriod, expenses }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0);

  return (
    <View style={styles.conatiner}>
      <Text style={styles.period}>{expensePeriod}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  conatiner: {
    padding: 12,
    marginHorizontal: 5,
    backgroundColor: GlobalStyles.colors.accent500,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  period: {
    fontSize: 14,
    color: GlobalStyles.colors.primary300,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary300
  }
});
