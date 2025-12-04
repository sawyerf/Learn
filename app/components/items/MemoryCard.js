import React from 'react'
import { Text, StyleSheet, Image, PanResponder, Animated } from 'react-native'

import theme from '~/styles/theme'
import size from '~/styles/size'

// i want to animate like tinder cards

const MemoryCard = ({ nativeWord, foreignWord, image = null, prev = () => {}, next = () => {} }) => {
  const position = React.useRef(new Animated.ValueXY()).current
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gesture) => {
      const x = Math.max(-100, Math.min(100, gesture.dx))
      position.setValue({ x, y: Math.abs(x) * 0.3})
    },
    onPanResponderRelease: (e, gesture) => {
      if (gesture.dx > 50) prev()
      else if (gesture.dx < -50) next()
      Animated.spring(position, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start()
    },
  })


  return (
    <Animated.View
      style={[styles.card, {
        transform: [{ translateX: position.x }, { translateY: position.y }]
      }]}
      {...panResponder.panHandlers}
    >
      {image && <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
      />}
      <Text style={styles.foreignWord}>{foreignWord || 'Foreign Word'}</Text>
      <Text style={styles.nativeWord}>{nativeWord || 'Native Word'}</Text>
    </Animated.View>
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