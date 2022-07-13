import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TestScreen from './app/screens/TestScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return <TestScreen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'greenyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
