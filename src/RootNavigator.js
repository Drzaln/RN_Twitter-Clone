import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from './Component/DrawerContent'
import StackNavigator from './StackNavigator'

const Drawer = createDrawerNavigator()

const RootNavigator = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
				<Drawer.Screen name='Home' component={StackNavigator} />
			</Drawer.Navigator>
		</NavigationContainer>
	)
}

export default RootNavigator
