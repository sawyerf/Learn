import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Container from '~/components/Container'
import ListItem from '~/components/items/ListItem'
import theme from '~/styles/theme'
import api from '~/libs/api'

const Course = ({ route: { params: { courseId, title } } }) => {
  const [lessons, setLessons] = React.useState([])
  const navigation = useNavigation()

  React.useEffect(() => {
    // Fetch course details using courseId if needed
    api.getLessons(courseId).then(lessons => {
      setLessons(lessons)
    })
  }, [courseId])

  return (
    <Container style={{
      padding: 20,
      paddingTop: 10,
    }}>
      <Text style={{ fontSize: 20, marginBottom: 20, marginTop: 10, color: theme.primaryText }}>
        {title}
      </Text>

      <View style={{
        gap: 10,
        width: '100%',
      }}>
        {lessons.map((item) => (
          <ListItem
            key={item.id}
            title={item.title}
            onPress={() => {
              navigation.navigate('Lesson', { lessonId: item.id })
            }}
            iconButton="edit"
            iconPress={() => {
              navigation.navigate('LessonEdit', { lessonId: item.id })
            }}
          />
        ))}
      </View>
    </Container>
  )
}

export default Course