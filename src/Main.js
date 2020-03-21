import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import RootNavigator from './RootNavigator'

const Main = () => {
	return (
		<PaperProvider>
			<RootNavigator />
		</PaperProvider>
	)
}

export default Main
