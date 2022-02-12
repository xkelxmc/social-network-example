import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthorizedNavigation} from './authorized/Authorized';
import {NotAuthorizedNavigation} from './notAuthorized/NotAuthorized';

const NavigationContent = () => {
  const isLogin = true;

  if (isLogin) {
    return <AuthorizedNavigation />;
  }
  return <NotAuthorizedNavigation />;
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationContent />
    </NavigationContainer>
  );
};
