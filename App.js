import React from 'react'
import { SystemBars } from 'react-native-edge-to-edge'
import { NavigationContainer } from '@react-navigation/native'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeStack, CoursesStack } from '~/screens/Stacks'
import theme from '~/styles/theme'
import TabBar from '~/components/TabBar'

const Tab = createBottomTabNavigator()

const App = () => {
	React.useEffect(() => {
		window.document.body.style.backgroundColor = theme.primaryBack
	}, [window])

	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<NavigationContainer
				documentTitle={{
					formatter: () => {
						return `Learn`
					}
				}}
			>
				<SystemBars style={theme.barStyle} />
				<Tab.Navigator
					tabBar={(props) => <TabBar {...props} />}
					screenOptions={{
						headerShown: false,
						navigationBarColor: theme.primaryBack,
						tabBarPosition: 'bottom',
						tabBarStyle: {
							backgroundColor: theme.secondaryBack,
							borderTopColor: theme.secondaryBack,
							tabBarActiveTintColor: theme.primaryTouch,
						}
					}}
				>
					<Tab.Screen name="HomeStack" options={{ title: 'Home', icon: "home" }} component={HomeStack} />
					<Tab.Screen name="CourseStack" options={{ title: 'Courses', icon: "book" }} component={CoursesStack} />
				</Tab.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

export default App