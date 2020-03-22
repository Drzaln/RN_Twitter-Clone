import React from 'react'
import color from 'color'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme, Portal, FAB } from 'react-native-paper'
import { useSafeArea } from 'react-native-safe-area-context'
import { useIsFocused, RouteProp } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Feather";

import Feed from "../Screen/Feed";
import Notifications from '../Screen/Notifications'
import Message from '../Screen/Message'

const Tab = createBottomTabNavigator()

export const BottomTabs = (props) => {
	const routeName = props.route.state ? props.route.state.routes[props.route.state.index].name : 'Feed'

	const theme = useTheme()
	const safeArea = useSafeArea()
	const isFocused = useIsFocused()

	let icon = 'feather'

	switch (routeName) {
		case 'Messages':
			icon = 'email-plus-outline'
			break
		default:
			icon = 'feather'
			break
	}

	const tabBarColor = theme.dark ? overlay(6, theme.colors.surface) : theme.colors.surface

	return (
		<React.Fragment>
			<Tab.Navigator
				initialRouteName='Feed'
				backBehavior='initialRoute'
				shifting={true}
				activeColor='#55acee'
				inactiveColor={color(theme.colors.text).alpha(0.6).rgb().string()}
				sceneAnimationEnabled={false}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName
                        if(route.name === 'Feed'){
                            iconName = focused ? 'home' : 'home'
                        } else if(route.name === 'Notifications'){
                            iconName = focused ? 'bell' : 'bell'
                        } else if(route.name === 'Messages'){
                            iconName = focused ? 'mail' : 'mail'
                        }
                        return <Icon name={iconName} color={color} size={size} />
                    }
                })}
			>
				<Tab.Screen
					name='Feed'
					component={Feed}
					
				/>
				<Tab.Screen
					name='Notifications'
					component={Notifications}
					
				/>
				<Tab.Screen
					name='Messages'
					component={Message}
					
				/>
			</Tab.Navigator>
			<Portal>
				<FAB
					visible={isFocused}
					icon={icon}
					style={{
						position: 'absolute',
						bottom: safeArea.bottom + 65,
						right: 16
					}}
					color='white'
					theme={{
						colors: {
							accent: '#55acee'
						}
					}}
					onPress={() => {}}
				/>
			</Portal>
		</React.Fragment>
	)
}
