import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Details from './Screen/Details'

const Stack = createStackNavigator()

const StackNavigator = () => {
	return (
		<Stack.Navigator initialRouteName='FeedList' headerMode='screen'>
			<Stack.Screen name='Details' component={Details} />
		</Stack.Navigator>
	)
}

export default StackNavigator
