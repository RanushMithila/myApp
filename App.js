import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListingScreen from './app/screens/ListingScreen';

import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import TestScreen from './app/screens/TestScreen';
import TextScreen from './app/screens/TextScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'greenyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
