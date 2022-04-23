import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Pressable, Text} from 'react-native';
import {MainLayout} from '../layouts/MainLayout';
import {userCollection} from '../interface-adapters/db/collections';
import {UserBadge} from '../components/UserBadge';

export const UsersListScreen = () => {
  const [usersList, setUsersList] = useState([]);
  const [state, setState] = useState('loading');

  const getUsersList = () => {
    userCollection.get().then(querySnapshot => {
      const users = [];
      querySnapshot.forEach(userSnapshot => {
        users.push({id: userSnapshot.id, ...userSnapshot.data()});
      });
      setUsersList(users);
      setState('success');
    });
  };

  useEffect(() => {
    getUsersList();
  }, []);

  const handleRefresh = () => {
    setState('refreshing');
    getUsersList();
  };

  const handlePressUser = user => () => {
    console.log(user);
  };

  const renderItem = ({item}) => (
    <Pressable
      onPress={handlePressUser(item)}
      style={({pressed}) => [{opacity: pressed ? 0.5 : 1, paddingVertical: 4}]}>
      <UserBadge user={item} />
    </Pressable>
  );

  return (
    <MainLayout>
      <FlatList
        renderItem={renderItem}
        data={usersList}
        contentContainerStyle={{padding: 12}}
        onRefresh={handleRefresh}
        refreshing={state === 'refreshing'}
        ListEmptyComponent={() => <ActivityIndicator />}
        onEndReached={() => console.log('load more')}
        onEndReachedThreshold={0.2}
      />
    </MainLayout>
  );
};
