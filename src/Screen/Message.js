import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from 'react-native-paper'

const Message = () => {
    const theme = useTheme()
    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: theme.colors.surface }}>
            <Text>Message</Text>
        </View>
    )
}

export default Message
