import React from 'react'
import { Text, View, TextInput, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, ScrollView, Keyboard } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle'
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {
    const { form, onChange } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.globalMargin}>
                        <HeaderTitle title='TextInputs' />
                        <TextInput
                            style={styleScreen.input}
                            placeholder='Ingrese su nombre'
                            autoCorrect={false}
                            maxLength={20}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                        />

                        <TextInput
                            style={styleScreen.input}
                            placeholder='Ingrese su email'
                            autoCorrect={false}
                            maxLength={50}
                            autoCapitalize='none'
                            keyboardType='email-address'
                            onChangeText={(value) => onChange(value, 'email')}
                        />
                        <View style={styleScreen.switchRow}>
                            <Text style={styleScreen.switchText}>Suscribirse</Text>
                            <CustomSwitch isOn={form.isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')}/>
                        </View>


                        <HeaderTitle title={JSON.stringify(form, null, '\t')} />

                        <HeaderTitle title={JSON.stringify(form, null, '\t')} />

                        <TextInput
                            style={styleScreen.input}
                            placeholder='Ingrese su telefono'
                            autoCorrect={false}
                            maxLength={15}
                            keyboardType='phone-pad'                
                            onChangeText={(value) => onChange(value, 'phone')}
                        />            
                        <View style={{height: 100}}/>

                    </View>

                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styleScreen = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 2
    },
    switchText: {
        fontSize: 25
    }
});
