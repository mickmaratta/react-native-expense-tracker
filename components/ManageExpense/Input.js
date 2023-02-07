import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'

const Input = ({label, invalid, style, textInputConfig}) => {

  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline)
  };

  if (invalid) {
    inputStyles.push(styles.invalidInput)
  };

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: { 
        fontSize: 12,
        color: GlobalStyles.colors.primary300,
        marginBottom: 4
    },
    invalidLabel: {
      color: GlobalStyles.colors.accent300,
    },
    input: {
        backgroundColor: GlobalStyles.colors.neutral500,
        color: GlobalStyles.colors.primary300,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
      minHeight: 100,
      textAlignVerticall: 'top',
    },
    invalidInput: {
      backgroundColor: GlobalStyles.colors.accent700
    }
})