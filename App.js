import React from 'react'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppearanceProvider } from 'react-native-appearance'
import Main from './src/Main'
import { StatusBar } from 'react-native'

const App = () => {
	return (
		<SafeAreaProvider>
			<AppearanceProvider>
				<StatusBar backgroundColor='#55acee' />
				<Main />
			</AppearanceProvider>
		</SafeAreaProvider>
	)
}

export default App
