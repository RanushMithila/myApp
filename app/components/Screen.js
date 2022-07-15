import React, { Children } from 'react';
import Constants from 'expo-constants';
import {SafeAreaView, StyleSheet, View} from 'react-native';

function Screen({ children, style }) {
    return (
        <View style={[styles.screen, style]}>
            <SafeAreaView  >
                {children}
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})
export default Screen;