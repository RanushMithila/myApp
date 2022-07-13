import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius={10}
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoConntainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagline}>Sell What you don't need</Text>
            </View>
            <View style={styles.BtnContainer}>
                <AppButton title="Login" onPress={() => console.log('Login')}/>
                <AppButton title="Register" color='secondary' onPress={() => console.log('Register')}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    BtnContainer: {
        padding: 10,
        width: '100%'
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoConntainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    }
})
export default WelcomeScreen;