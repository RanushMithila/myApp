import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';

import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';

function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <AppTextInput 
                autoCapitalize='none'
                autoCorrect={false}
                icon='email'
                keyboardType='email-address'
                onChange={text => setEmail(text)}
                placeholder='email'
                textContentType='emailAddress'
            />
            <AppTextInput 
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
                onChange={text => setPassword(text)}
                placeholder='Password'
                secureTextEntry
                textContentType='password'
            />
            <AppButton 
                title='Login'
                onPress={() => console.log(email, password)}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})
export default LoginScreen;