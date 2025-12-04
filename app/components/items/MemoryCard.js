import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import theme from '~/styles/theme'
import size from '~/styles/size'

const MemoryCard = ({ nativeWord, foreignWord, image = null }) => {
  return (
    <View style={styles.card}>
      {image && <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
      />}
      <Text style={styles.foreignWord}>{foreignWord || 'Foreign Word'}</Text>
      <Text style={styles.nativeWord}>{nativeWord || 'Native Word'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.secondaryBack,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    maxWidth: 450,
  },
  foreignWord: {
    color: theme.primaryText,
    fontSize: size.text.l,
  },
  nativeWord: {
    color: theme.secondaryText,
    fontSize: size.text.m,
    marginBottom: 10,
  },
  image: {
    maxWidth: 300,
    width: '100%',
    height: 200,
  },
})

export default MemoryCard