import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useDispatch, useSelector } from "react-redux";
import { allExpenses, setExpenses } from "../redux/expensesSlice";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const RecentExpensesScreen = () => {
  const [isFetching, setIsFetching] = useState(true)
  const expenses = useSelector(allExpenses);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      dispatch(setExpenses(expenses)); 
      setIsFetching(false);
    }
    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />
  };

  const recentExpenses = expenses.filter((e) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return e.date >= date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expensePeriod="Last 7 Days"
      expenses={recentExpenses}
      fallbackText="No expenses in the last 7 days"
    />
  );
};

export default RecentExpensesScreen;

const styles = StyleSheet.create({});
