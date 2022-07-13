import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoConntainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text>Sell What you don't need</Text>
            </View>
            <View style={styles.loginBtn}></View>
            <View style={styles.regBtn}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginBtn: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',

    },
    regBtn: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ECDC4',
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