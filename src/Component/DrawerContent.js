import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer } from 'react-native-paper'
import Animated from 'react-native-reanimated'

const DrawerContent = (props) => {
	const paperTheme = useTheme()
	const translateX = Animated.interpolate(props.progress, {
		inputRange: [ 0, 0.5, 0.7, 0.8, 1 ],
		outputRange: [ -100, -85, -70, -45, 0 ]
	})

	return (
		<DrawerContentScrollView>
			<Animated.View
				style={{ flex: 1, backgroundColor: paperTheme.colors.surface, transform: [ { translateX } ] }}
			>
				<View style={styles.userInfoSection}>
					<TouchableOpacity
						onPress={() => {
							props.navigation.toggleDrawer()
						}}
					>
						<Avatar.Image
							source={{
								uri:
									'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/75098631_482550472362353_3585708749064503296_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=wQ6B8mUBiS8AX9-pNgu&oh=dc684c8f46badfa56a5c8698b621cc07&oe=5EA99902'
							}}
							size={50}
						/>
					</TouchableOpacity>
					<Title
						style={styles.title}
					>
						Doddy Rizal N
					</Title>
					<Caption
						style={styles.caption}
					>
						@drzaln
					</Caption>
					<View style={styles.row}>
						<View style={styles.section}>
							<Paragraph style={[ styles.paragraph, styles.caption ]}>1</Paragraph>
							<Caption style={styles.caption}>Follower</Caption>
						</View>
						<View style={styles.section}>
							<Paragraph style={[ styles.paragraph, styles.caption ]}>1</Paragraph>
							<Caption style={styles.caption}>Following</Caption>
						</View>
					</View>
				</View>
                <Drawer.Section>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon name='account-outline' color={color} size={size} />
                        )}
                        label='Profile'
                        onPress={() => {}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon name='settings-outline' color={color} size={size} />
                        )}
                        label='Preferences'
                        onPress={() => {}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon name='bookmark-outline' color={color} size={size} />
                        )}
                        label='Bookmarks'
                        onPress={() => {}}
                    />
                </Drawer.Section>
			</Animated.View>
		</DrawerContentScrollView>
	)
}

export default DrawerContent

const styles = StyleSheet.create({
	userInfoSection: {
		padding: 20
	},
	title: {
		marginTop: 20,
		fontWeight: 'bold'
	},
	caption: {
		fontSize: 14,
		lineHeight: 14
	},
	row: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center'
	},
	section: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 15
	},
	paragraph: {
		fontWeight: 'bold',
		marginRight: 3
	},
	drawerSection: {
		marginTop: 15
	},
	preference: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 12,
		paddingHorizontal: 16
	}
})
