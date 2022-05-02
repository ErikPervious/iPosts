import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FirebaseProvider } from './src/contexts/useFirebase';

import { Routes } from './src/routes';

import { colors } from './src/styles';

export default function App() {
  return (
    <View style={{backgroundColor: colors.BLACK_TERTIARY, flex: 1}}>
      <NavigationContainer>
        <FirebaseProvider>
          <Routes />
        </FirebaseProvider>
      </NavigationContainer>
    </View>
  );
}
