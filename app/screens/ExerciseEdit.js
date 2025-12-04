import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Container from '~/components/Container'
import ListItem from '~/components/items/ListItem'
import api from '~/libs/api'
import theme from '~/styles/theme'
import Input from '../components/items/Input'

const defaultExercise = {
  type: 'MEMORY_CARD',
  foreignWord: '',
  nativeWord: '',
  imageUrl: '',

  question: '',
  answer: '',
  options: [],
}

const ExerciseEdit = ({ route: { params: { lessonId, exercise = null } } }) => {
  const [editable, setEditable] = React.useState(exercise || defaultExercise)
  const navigation = useNavigation()

  return (
    <Container style={{
      padding: 20,
      paddingBottom: 10,
    }}>
      <Text style={{ fontSize: 20, marginBottom: 20, marginTop: 10, color: theme.primaryText }}>
        Edit exercise
      </Text>
      <View style={{
        gap: 10,
        width: '100%',
      }}>
        <Input
          label="Foreign Word"
          value={editable.foreignWord}
          onChangeText={(text) => setEditable({ ...editable, foreignWord: text })}
        />
        <Input
          label="Native Word"
          value={editable.nativeWord}
          onChangeText={(text) => setEditable({ ...editable, nativeWord: text })}
        />
        <ListItem
          icon="save"
          title={!exercise ? "Create Exercise" : "Save Changes"}
          onPress={() => {
            if (!exercise) {
              api.createExercise({ ...editable, lessonId }).then(() => {
                // go back
                navigation.goBack()
              })
            } else {
              api.updateExercise({ ...editable, lessonId }, exercise.id).then(() => {
                // go back
                navigation.goBack()
              })
            }
          }}
        />
        {
          exercise && (
            <ListItem
              icon="delete"
              title="Delete Exercise"
              onPress={() => {
                api.deleteExercise(exercise.id).then(() => {
                  navigation.goBack()
                })
              }}
            />
          )
        }
      </View>
    </Container>
  )
}

export default ExerciseEdit