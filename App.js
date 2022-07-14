import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import TestScreen from './app/screens/TestScreen';
import TextScreen from './app/screens/TextScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  return <ListingDetailsScreen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'greenyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
