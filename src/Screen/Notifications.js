import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from 'react-native-paper'

const Notifications = () => {
	const theme = useTheme()
	return (
		<View style={{ flex: 1, padding: 16, backgroundColor: theme.colors.surface }}>
			<Text>Notifff</Text>
		</View>
	)
}

export default Notifications
