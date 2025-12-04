import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Container from '~/components/Container'
import ListItem from '~/components/items/ListItem'
import theme from '~/styles/theme'
import api from '~/libs/api'

const MyCourses = () => {
  const [courses, setCourses] = React.useState([])
  const navigation = useNavigation()

  React.useEffect(() => {
    api.getCourses().then(courses => {
      setCourses(courses)
    })
  }, [])

  return (
    <Container style={{
      padding: 20,
      paddingTop: 10,
    }}>
      <Text style={{ fontSize: 20, marginBottom: 20, marginTop: 10, color: theme.primaryText }}>My Courses</Text>
      <View style={{
        gap: 10,
        width: '100%',
      }}>
        {courses.map((course) => (
          <ListItem
            key={course.id}
            title={course.title}
            description={course.description}
            onPress={() => {
              navigation.navigate('Course', { courseId: course.id, title: course.title })
            }}
          />
        ))}
      </View>
    </Container>
  )
}

export default MyCourses