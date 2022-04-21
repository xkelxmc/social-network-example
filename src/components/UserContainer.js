import React from 'react';
import {StyleSheet, View} from 'react-native';
import {UserBadge} from './UserBadge';

export const UserContainer = ({user, children}) => {
  return (
    <View style={styles.root}>
      <UserBadge user={user} />
      {children && <View>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
  },
});
