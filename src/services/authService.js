import React, {createContext, useContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({user: null, initializing: true});

export const AuthProvider = ({children}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    AsyncStorage.setItem('user', user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const getAuth = async () => {
      const localUser = await AsyncStorage.getItem('user');
      console.log('localUser', localUser);
    };
    getAuth();
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <AuthContext.Provider value={{user, initializing}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const {user, initializing} = useContext(AuthContext);
  return {user, initializing};
};
