module.exports = ({ config }) => {
	return {
		expo: {
			name: "Learn",
			slug: "Learn",
			description: "Learn",
			version: config.version,
			orientation: "default",
			// icon: "./assets/icon.png",
			userInterfaceStyle: "light",
			newArchEnabled: false, // Disable New Architecture because react-native-track-player does not support it yet
			assetBundlePatterns: [
				"**/*"
			],
			web: {
				// favicon: "./assets/icon.png",
				shortName: "Learn",
				startUrl: "./index.html",
				backgroundColor: "#121212",
				theme_color: "#121212"
			},
			experiments: {
				baseUrl: process.env.PLATFORM === "web" ? "./" : undefined
			},
			plugins: [
				[
					"react-native-edge-to-edge",
					{
						"android": {
							"parentTheme": "Default",
							"enforceNavigationBarContrast": false
						}
					}
				],
			]
		}
	}
}
