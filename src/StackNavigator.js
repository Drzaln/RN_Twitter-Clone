import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Details from './Screen/Details'
import { Appbar, useTheme, Avatar } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { BottomTabs } from './Component/BottomTabs'

const Stack = createStackNavigator()

const StackNavigator = () => {
	const theme = useTheme()

	return (
		<Stack.Navigator
			initialRouteName='FeedList'
			headerMode='screen'
			screenOptions={{
				header: ({ scene, previous, navigation }) => {
					const { options } = scene.descriptor
					const title =
						options.headerTitle !== undefined
							? options.headerTitle
							: options.title !== undefined ? options.title : scene.route.name
					return (
						<Appbar.Header
							theme={{ colors: { primary: theme.colors.surface } }}
							style={{ paddingHorizontal: 16 }}
						>
							{previous ? (
								<Appbar.BackAction onPress={navigation.goBack} color={theme.colors.primary} />
							) : (
								<TouchableOpacity onPress={() => {}}>
									<Avatar.Image
										size={40}
										source={{
											uri:
												'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/75098631_482550472362353_3585708749064503296_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=wQ6B8mUBiS8AX9-pNgu&oh=dc684c8f46badfa56a5c8698b621cc07&oe=5EA99902'
										}}
									/>
								</TouchableOpacity>
							)}
							<Appbar.Content
								title={
									title === 'Feed' ? (
										<Icon style={{ marginRight: 10 }} name='twitter' size={40} color='#55acee' />
									) : (
										title
									)
								}
								titleStyle={{
									fontSize: 18,
									fontWeight: 'bold',
									color: '#55acee'
								}}
								style={{ marginLeft: 24 }}
							/>
						</Appbar.Header>
					)
				}
			}}
		>
			<Stack.Screen
				name='FeedList'
				component={BottomTabs}
				options={({ route }) => {
					console.log('!@# options', { route })
					const routeName = route.state ? route.state.routes[route.state.index].name : 'Feed'
					return { headerTitle: routeName }
				}}
			/>
			<Stack.Screen name='Details' component={Details} options={{ headerTitle: 'Tweet' }} />
		</Stack.Navigator>
	)
}

export default StackNavigator
