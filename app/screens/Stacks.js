import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import theme from '~/styles/theme'
import Home from '~/screens/tabs/Home'
import MyCourses from '~/screens/tabs/MyCourses'
import Course from '~/screens/Course'
import Lesson from '~/screens/Lesson'
import LessonEdit from '~/screens/LessonEdit'
import ExerciseEdit from '~/screens/ExerciseEdit'

const Stack = createNativeStackNavigator()

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.secondaryBack,
          borderTopColor: theme.secondaryBack,
          tabBarActiveTintColor: theme.primaryTouch,
        }
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export const CoursesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.secondaryBack,
          borderTopColor: theme.secondaryBack,
          tabBarActiveTintColor: theme.primaryTouch,
        }
      }}
    >
      <Stack.Screen name="MyCourses" component={MyCourses} />
      <Stack.Screen name="Course" component={Course} />
      <Stack.Screen name="Lesson" component={Lesson} />
      <Stack.Screen name="LessonEdit" component={LessonEdit} />
      <Stack.Screen name="ExerciseEdit" component={ExerciseEdit} />
    </Stack.Navigator>
  )
}