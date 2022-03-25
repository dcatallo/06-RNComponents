import React from 'react'
import { useState } from 'react'
import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

interface Props {
    uri: string
    style?: StyleProp<ImageStyle>
}

export const FadeInImage = ({uri, style} : Props) => {

    const { opacity, fadeIn } = useAnimation(); 
    const [isLoading, setIsLoading] = useState(true);
    
    const onLoadEnd = () => {
        setIsLoading(false)
        fadeIn(600)
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            {
                isLoading && <ActivityIndicator size={30} color='blue' style={{position: 'absolute'}}/>
            }
            <Animated.Image
                onLoadEnd={onLoadEnd}
                source={{uri}}
                style={{
                    ...style as any, opacity
                }}
            />
        </View>
    )
}
