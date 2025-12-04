import React from 'react'
import { View, Text } from 'react-native'

import mainStyle from '~/styles/main'
import theme from '~/styles/theme'
import Container from '~/components/Container'
import MemoryCard from '~/components/items/MemoryCard'

const Home = () => {
  return (
    <Container style={{
      alignItems: 'center',
      padding: 20,
    }}>
      <MemoryCard
        nativeWord="Porte"
        foreignWord="كتاب"
        image="https://cdn.modrinth.com/data/rcYeAapx/04b0688c0bfbf4609d1d4dd03525503da5ea2a2d.png"
      />
    </Container>
  )
}

export default Home