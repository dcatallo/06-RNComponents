import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { MenuItem } from '../interfaces/appInterfaces'

interface Props {
    menuItem : MenuItem
}

export const FlatListMenuItem = ({menuItem} : Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate(menuItem.component as any)}
        >
            <View style={styles.container}>
                <Icon size={23} color='#5856D6' name={menuItem.icon} /> 
                <Text style={styles.itemText}>{menuItem.name}</Text>
                <View style={{flex : 1}}/>
                <Icon size={23} color='#5856D6' name='chevron-forward-outline' /> 
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 5,
        fontSize: 19
    }
});
