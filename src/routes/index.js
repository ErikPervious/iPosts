import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';

import { SignIn } from '../pages/SignIn';

import { AppRoutes } from './app.routes';

export function Routes() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null; 

  return (
    !user ? <SignIn /> : <AppRoutes />
  );
}
