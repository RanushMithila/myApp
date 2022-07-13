import React from 'react';
import { View } from 'react-native';
import Card from '../components/Card';

function LoginScreen(props) {
    return (
        <View 
            style={{
                backgroundColor: '#e8e8e8',
                pasdding: 20,
                paddingTop: 100,
            }}
        >
            <Card 
                title='Jacket'
                subTitle='$100'
                image={require('../assets/jacket.jpg')}
            />
        </View>
    );
}

export default LoginScreen;