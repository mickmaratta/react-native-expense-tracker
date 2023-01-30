import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const ExpensesList = ({ expenses }) => {
  function renderExpenseItem({ item }) {
    return <Text>{item.description}</Text>;
  }

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
