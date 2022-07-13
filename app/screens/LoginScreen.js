import React from 'react';
import { View } from 'react-native';
import AppButton from '../components/AppButton';

function LoginScreen(props) {
    return (
        <View 
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <AppButton title="Login" onPress={() => console.log('Works!!')}/>
        </View>
    );
}

export default LoginScreen;