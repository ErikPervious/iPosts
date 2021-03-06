import React, { createContext, useCallback, useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const FirebaseContext = createContext();

export function FirebaseProvider({children}) {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [connectionState, setConnectionState] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

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
      setUser(userData);
      firestore().collection('Users').doc(value.user.uid).set(userData)
      .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
    setConnectionState(false);
  };

  function LogOutOfFirebase() {
    setPosts([]);
    setUser({});
    auth().signOut();
  };

  function getUserData() {
    const uid = auth().currentUser.uid;
    firestore().collection('Users').doc(uid).get()
    .then(snapshot => {
      setUser(snapshot.data());
    });
  };

  function getPosts() {
    setLoadingPosts(true);
    firestore().collection('Posts').orderBy('createdIn', 'desc').get()
    .then(snapshot => {
      let listPosts = [];
      snapshot.docs.map(value => {
        const date = value.data().createdIn.toDate();
        let post = {
          name: value.data().name,
          content: value.data().content,
          author: value.data().author,
          createdIn: `${date.getUTCHours()}:${date.getUTCMinutes()}`,
          likes: value.data().likes,
          postId: value.data().postId
        }
        listPosts.push(post);
      });
      setPosts(listPosts);
      setRefreshing(false);
      setLoadingPosts(false);
    })
    .catch(error => {
      console.log(error);
      setRefreshing(false);
      setLoadingPosts(false);
    })
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getPosts();
  }, []);

  return (
    <FirebaseContext.Provider value={{
      LogInInFirebase,
      LogOnInFirebase,
      LogOutOfFirebase,
      connectionState,
      user,
      getPosts,
      getUserData,
      posts,
      loadingPosts,
      refreshing,
      onRefresh
    }}>
      {children}
    </FirebaseContext.Provider>
  );
};