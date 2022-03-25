import React, { useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0,1,2,3,4,5])

    const loadMore = () => {
        const newArray: number[] = []
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArray])
        }, 1500)
    }

    const renderItem = (item : number) => {
        return (            
            <FadeInImage 
                uri={`https://picsum.photos/id/${item}/500/400.jpg`}
                style={{
                    width: '100%', 
                    height: 400
                }}   
            />
        )
    }
    return (
        <View>            
            <FlatList 
                data={numbers}
                renderItem={ ({ item }) => renderItem(item) }
                keyExtractor={(item) => item.toString()}
                ListHeaderComponent={() => (
                    <View style={styles.globalMargin}>
                        <HeaderTitle title='Infinite Scroll' />
                    </View>
                )}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => (
                    <View style={{height: 50, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size={40} color='red' />
                    </View>
                )}
            />
        </View>
    )
}
