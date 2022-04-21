import React, {createContext, useContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userCollection} from '../interface-adapters/db/collections';

const AuthContext = createContext({user: null, initializing: true});

export const AuthProvider = ({children}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    AsyncStorage.setItem('user', JSON.stringify(user));
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const getAuth = async () => {
      const localUser = await AsyncStorage.getItem('user');
      if (localUser) {
        console.log('localUser', JSON.parse(localUser));
      }
    };
    getAuth();
  }, []);

  useEffect(() => {
    if (user) {
      userCollection
        .doc(user.uid)
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            const data = documentSnapshot.data();
            setUserData(data);
          }
        });
    }
  }, [user]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <AuthContext.Provider value={{user, initializing, userData}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const {user, initializing, userData} = useContext(AuthContext);
  return {user, initializing, userData};
};
