import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {PRIMARY} from '../ustils/theme/light';

export const UserBadge = ({user}) => {
  return (
    <View style={styles.root}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {user.name[0]}
          {user.surname[0]}
        </Text>
      </View>
      <View style={styles.userName}>
        <Text>
          {user.name}
          {user.surname}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
  },
  userName: {
    flex: 1,
    marginLeft: 16,
  },
});
