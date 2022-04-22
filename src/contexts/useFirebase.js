import React, { createContext, useState } from "react";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const FirebaseContext = createContext();

export function FirebaseProvider({children}) {
  const [user, setUser] = useState({});
  const [connectionState, setConnectionState] = useState(false);

  function LogInInFirebase(email, password) {
    if (email === '' || password === '') return alert('Preencha todos os campos!');

    setConnectionState(true);
    auth().signInWithEmailAndPassword(email, password)
    .then(value => {
      firestore().collection('Users').doc(value.user.uid).get()
      .then(snapshot => {
        setUser(snapshot.data());
      });
    })
    .catch(error => console.log(error));
    setConnectionState(false);
  };

  function LogOnInFirebase(name, email, password) {
    if (name === '' || email === '' || password === '') return alert('Preencha todos os campos!');

    setConnectionState(true);
    auth().createUserWithEmailAndPassword(email, password)
    .then(value => {
      const userData = {
        uid: value.user.uid,
        name: name,
        email: email,
        registeredIn: new Date()
      };
      firestore().collection('Users').doc(value.user.uid).set(userData)
      .catch(error => console.log(error));
      setUser(userData);
    })
    .catch(error => console.log(error));
    setConnectionState(false);
  };

  function LogOutOfFirebase() {
    auth().signOut();
  };

  return (
    <FirebaseContext.Provider value={{
      LogInInFirebase,
      LogOnInFirebase,
      LogOutOfFirebase,
      connectionState,
      user
    }}>
      {children}
    </FirebaseContext.Provider>
  );
};