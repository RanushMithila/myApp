import React, {useState} from 'react';
import { StyleSheet, Switch } from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';

import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {

  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'greenyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
