import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Container from '~/components/Container'
import ListItem from '~/components/items/ListItem'
import api from '~/libs/api'
import theme from '~/styles/theme'

const Lesson = ({ route: { params: { lessonId } } }) => {
  const [exercises, setExercises] = React.useState([])
  const navigation = useNavigation()

  React.useEffect(() => {
    api.getExercises(lessonId).then(exercises => {
      setExercises(exercises)
    })
  }, [lessonId, navigation])

  return (
    <Container style={{
      padding: 20,
      paddingBottom: 10,
    }}>
      <Text style={{ fontSize: 20, marginBottom: 20, marginTop: 10, color: theme.primaryText }}>
        Exercises
      </Text>
      <View style={{
        gap: 10,
        width: '100%',
      }}>
        {
          exercises.map((item) => (
            <ListItem
              key={item.id}
              icon="amp-stories"
              title={`${item.foreignWord} - ${item.nativeWord}`}
              iconButton="edit"
              iconPress={() => {
                navigation.navigate('ExerciseEdit', { lessonId, exercise: item })
              }}
            />
          ))
        }
        <ListItem
          icon="add"
          title="Add Exercise"
          onPress={() => {
            navigation.navigate('ExerciseEdit', { lessonId })
          }}
        />
      </View>
    </Container>
  )
}

export default Lesson