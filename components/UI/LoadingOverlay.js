import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black" />
    </View>
  )
}

export default LoadingOverlay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.neutral100
    }
})