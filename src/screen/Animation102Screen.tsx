import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

export const Animation102Screen = () => {

    const { panResponder, pan } = useAnimation()

    return (
        <View style={styles.container}>
            <Animated.View
                {...panResponder.panHandlers}
                style={[pan.getLayout(), styles.purpleBox]}
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
        height: 150,
        borderRadius: 4,
    }    
});
