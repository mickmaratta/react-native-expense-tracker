import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";
import { allExpenses } from "../redux/expensesSlice";

const AllExpensesScreen = () => {
  const expenses = useSelector(allExpenses);
  return <ExpensesOutput expensePeriod="Total" expenses={expenses} />;
};

export default AllExpensesScreen;

const styles = StyleSheet.create({});
