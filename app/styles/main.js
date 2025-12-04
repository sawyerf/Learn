import { StyleSheet } from "react-native"
import theme from "~/styles/theme"

export default StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: theme.primaryBack,
	},
	opacity: ({ pressed, enable = true }) => ({
		opacity: (pressed && enable) ? 0.5 : 1,
	}),
})