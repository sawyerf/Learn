import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import theme from '~/styles/theme'

const Input = ({ label, value, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    marginStart: 5,
    marginBottom: 5,
    fontSize: 15,
    color: theme.secondaryText,
  },
  input: {
    flex: 1,
    padding: 15,
    textAlign: 'left',
    // shadowBottom
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: theme.secondaryBack,
    borderRadius: 10,
    outline: 'none',
  },
})

export default Input