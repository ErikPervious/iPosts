import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FirebaseProvider } from './src/contexts/useFirebase';

import { Routes } from './src/routes';

export default function App() {
  return (  
    <NavigationContainer>
      <FirebaseProvider>
        <Routes />
      </FirebaseProvider>
    </NavigationContainer>
  );
}
