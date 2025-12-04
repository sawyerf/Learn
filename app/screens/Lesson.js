import React from 'react'
import Container from '~/components/Container'

import MemoryCard from '~/components/items/MemoryCard'
import api from '~/libs/api'

const Lesson = ({ route: { params: { lessonId } } }) => {
  const [exercises, setExercises] = React.useState([])
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    // Fetch course details using courseId if needed
    api.getExercises(lessonId).then(exercises => {
      setExercises(exercises)
    })
  }, [lessonId])

  return (
    <Container style={{
      padding: 20,
      paddingBottom: 10,
    }}>
      {
        exercises.length > 0 ? (
          <MemoryCard
            nativeWord={exercises[index].nativeWord}
            foreignWord={exercises[index].foreignWord}
            image={exercises[index].imageUrl}
            prev={() => setIndex(index - 1 < 0 ? 0 : index - 1)}
            next={() => setIndex(index + 1 >= exercises.length ? exercises.length - 1 : index + 1)}
          />
        ) : null
      }
    </Container>
  )
}

export default Lesson