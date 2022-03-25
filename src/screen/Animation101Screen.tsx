import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

export const Animation101Screen = () => {

    const {fadeIn, fadeOut, startMovingPosition, opacity, position} = useAnimation()

    return (
        <View style={styles.container}>
            <Animated.View style={{
                marginBottom: 20,
                ...styles.purpleBox,
                opacity,
                transform: [{
                    translateX: position
                }]
            }} />

            
                <Button
                    title='fadeIn'
                    onPress={() => {
                        fadeIn()
                        startMovingPosition(200)
                    }} 
                />
                <Button
                    title='fadeOut'
                    onPress={fadeOut} 
                />            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
});
