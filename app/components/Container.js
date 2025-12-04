import React from 'react'
import { View, StyleSheet } from 'react-native'

import theme from '~/styles/theme'

const Container = ({ children, style }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.content, style]}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primaryBack,
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: 1000,
  },
})

export default Container