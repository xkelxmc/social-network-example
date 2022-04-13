import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthorizedNavigation} from './authorized/Authorized';
import {NotAuthorizedNavigation} from './notAuthorized/NotAuthorized';
import {AuthProvider, useAuthContext} from '../../services/authService';

const NavigationContent = () => {
  const {initializing, user} = useAuthContext();
  if (initializing) {
    return null;
  }
  if (!user) {
    return <NotAuthorizedNavigation />;
  }
  return <AuthorizedNavigation />;
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NavigationContent />
      </AuthProvider>
    </NavigationContainer>
  );
};
