import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'

const Input = ({label, textInputConfig}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 16,
    },
    label: { 
        fontSize: 12,
        color: GlobalStyles.colors.primary300,
        marginBottom: 4
    },
    input: {
        backgroundColor: CLo
    },
})