import React from 'react'

import Container from '~/components/Container'
import MemoryCard from '~/components/items/MemoryCard'

const cards = [
  {
    nativeWord: 'Porte',
    foreignWord: 'باب',
    image: 'https://cdn.modrinth.com/data/rcYeAapx/04b0688c0bfbf4609d1d4dd03525503da5ea2a2d.png',
  },
  {
    nativeWord: 'Livre',
    foreignWord: 'كتاب',
    image: 'https://cdn.modrinth.com/data/Kgm0Z8tP/b01a7a85ce25234750fd0d84cd6c1ed1950f16a9.png',
  },
  {
    nativeWord: 'Chien',
    foreignWord: 'كلب',
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/359fe050-3abb-4764-b470-33c7883ce044/de8zzqd-be786aef-c8ca-4c2c-a4f3-ad0428ec0648.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8zNTlmZTA1MC0zYWJiLTQ3NjQtYjQ3MC0zM2M3ODgzY2UwNDQvZGU4enpxZC1iZTc4NmFlZi1jOGNhLTRjMmMtYTRmMy1hZDA0MjhlYzA2NDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2PDp-6GVdt-3CQyWCTBgiZ_OwJO9CqIj1OSqYOrV6WU',
  },
]

const Home = () => {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0)

  return (
    <Container style={{
      alignItems: 'center',
      padding: 20,
      paddingBottom: 5,
    }}>
      <MemoryCard
        nativeWord={cards[currentCardIndex].nativeWord}
        foreignWord={cards[currentCardIndex].foreignWord}
        image={cards[currentCardIndex].image}
        next={() => setCurrentCardIndex((currentCardIndex + 1) % cards.length)}
        prev={() => setCurrentCardIndex((currentCardIndex - 1 + cards.length) % cards.length)}
      />
    </Container>
  )
}

export default Home