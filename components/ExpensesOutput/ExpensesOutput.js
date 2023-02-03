import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const ExpensesOutput = ({ expenses, expensePeriod, fallbackText }) => {
  
  let content = <Text style={styles.fallbackText}>{fallbackText}</Text>
  if (expenses.length > 0) {
      content = <ExpensesList expenses={expenses} />
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expensePeriod={expensePeriod} expenses={expenses} />
      {content}
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
  },
  fallbackText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
    fontStyle: "italic",
    color: GlobalStyles.colors.primary300,
  }
});
