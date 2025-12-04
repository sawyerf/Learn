import React from 'react'
import { View, Text, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import theme from '~/styles/theme'
import mainStyles from '~/styles/main'
import size from '~/styles/size'

const TabItem = ({ route, index, state, descriptors, navigation }) => {
	const options = React.useMemo(() => descriptors[route.key].options, [])
	const isFocused = React.useMemo(() => state.index === index, [state.index, index])
	const color = React.useMemo(() => {
		if (isFocused) return theme.primaryTouch
		return theme.primaryText
	}, [isFocused, route.name, theme])

	const onPress = () => {
		const event = navigation.emit({
			type: 'tabPress',
			target: route.key,
			canPreventDefault: true,
		})

		if (!isFocused && !event.defaultPrevented) {
			navigation.navigate(route.name, route.params)
		}
	}

	return (
		<Pressable
			key={index}
			onPress={onPress}
			style={({ pressed }) => ([mainStyles.opacity({ pressed }), { paddingHorizontal: 12, paddingVertical: 6 }] )}
		>
			<Icon name={options.icon} size={size.icon.xs} color={color} style={{ alignSelf: 'center', marginBottom: 2}} />
			<Text numberOfLines={1} style={{ color: color, textAlign: 'center', fontSize: 13, lineHeight: 11 }}>
				{options.title}
			</Text>
		</Pressable>
	)
}

const TabBar = ({ state, descriptors, navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.tabBar}>
				{
					state.routes.map((route, index) => (
						<TabItem
							key={index}
							route={route}
							state={state}
							index={index}
							descriptors={descriptors}
							navigation={navigation}
						/>
					))
				}
			</View>
		</View>
	)
}

const styles = {
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	tabBar: {
		flexDirection: 'row',
		backgroundColor: theme.secondaryBack,
		borderRadius: size.radius.circle,
		margin: 10,
		paddingVertical: 5,
		paddingHorizontal: 25,
	},
}

export default TabBar