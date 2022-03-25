import React from 'react'
import { View, FlatList } from 'react-native'   
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator'
import { menuItem } from '../data/menuItems'
import { styles } from '../theme/appTheme'

export const HomeScreen = () => {

    return (
        <View style={{flex: 1, ...styles.globalMargin}}>
            <FlatList 
                keyExtractor={(item) => item.name}
                data={menuItem}
                renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
                ListHeaderComponent={() => <HeaderTitle title='Opciones de menú'/>}
                ItemSeparatorComponent={() => <ItemSeparator/>}
            />
        </View>
    )
}
