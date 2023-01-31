import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ description, amount, date }) => {
  const navigation = useNavigation();
  function expensePressHandler() {
    navigation.navigate("ManageExpense");
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View style={[styles.textBase, styles.description]}>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <Text style={styles.amount}>${amount.toFixed(2)}</Text>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 5,
    backgroundColor: GlobalStyles.colors.neutral100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.primary300,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
  },
  textBase: {
    color: GlobalStyles.colors.primary300,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amount: {
    color: GlobalStyles.colors.accent300,
    fontWeight: "bold",
  },
});
