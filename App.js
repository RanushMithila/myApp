import React, {useState} from 'react';
import { StyleSheet, Switch, Text, TextInput } from 'react-native';

import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import TestScreen from './app/screens/TestScreen';
import TextScreen from './app/screens/TextScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';

export default function App() {

  const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <Switch 
      onValueChange={newValue => setIsNew(newValue)}
      value={isNew}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'greenyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
