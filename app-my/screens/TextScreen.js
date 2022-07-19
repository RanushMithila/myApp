import React from 'react';
import { Text, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from '../components/AppText';

function TextScreen(props) {
    return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <AppText style={{
                        //fontFamily: 'Roboto',
                        fontSize: 30,
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: 'tomato',
                        textAlign: 'justify',
                        lineHeight: 50,
                    }}>I Love React Native.</AppText>
                    <MaterialCommunityIcons name='email' size={200} color='dodgerblue' />
            </View>
    );
}

export default TextScreen;