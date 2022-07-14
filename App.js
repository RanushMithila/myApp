import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import TestScreen from './app/screens/TestScreen';
import TextScreen from './app/screens/TextScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';

export default function App() {
  return (
  <Screen>
    <ListItem 
      title='My Titls'
      IconComponent={<Icon name='email' />}
    />
  </Screen>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'greenyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
