import { StyleSheet, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpense,
  allExpenses,
  deleteExpense,
  updateExpense,
} from "../redux/expensesSlice";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteDatabaseExpense, storeExpense, updateDatabaseExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const ManageExpenseScreen = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const dispatch = useDispatch();
  
  const selectedExpense = useSelector(allExpenses).find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    setIsSubmitting(true);
    dispatch(deleteExpense(editedExpenseId));
    deleteDatabaseExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    setIsSubmitting(true)
    if (isEditing) {
      dispatch(
        updateExpense({
          id: editedExpenseId,
          ...expenseData,
        })
      );
      await updateDatabaseExpense(editedExpenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      dispatch(addExpense({ ...expenseData, id: id }));
    }
    navigation.goBack();
  }

  if(isSubmitting) {
    return <LoadingOverlay />
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.accent300}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.neutral100,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary500,
    alignItems: "center",
  },
});
