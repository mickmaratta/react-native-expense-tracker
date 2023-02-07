import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import { GlobalStyles } from "../../constants/styles";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  function inputChangedHandler(inputIdentifier, enteredAmount) {
    setInputs((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: { value: enteredAmount, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value).getTime(),
      description: inputs.description.value,
    };

    //VALIDATE DATA
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date;
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          invalid={!inputs.amount.isValid}
          style={styles.rowInput}
          textInputConfig={{
            value: inputs.amount.value,
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
          }}
        />
        <Input
          label="Date"
          invalid={!inputs.date.isValid}
          style={styles.rowInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            value: inputs.date.value,
            keyboardType: "default",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          value: inputs.description.value,
          multiline: true,
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "description"),
        }}
      />
      {formIsInvalid && <Text style={styles.errorText}>Invalid Form</Text>}
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary300,
    marginBottom: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.accent300,
    margin: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
