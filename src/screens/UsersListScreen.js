import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, Text} from 'react-native';
import {MainLayout} from '../layouts/MainLayout';
import {userCollection} from '../interface-adapters/db/collections';

export const UsersListScreen = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    userCollection.get().then(querySnapshot => {
      const users = [];
      querySnapshot.forEach(userSnapshot => {
        users.push({id: userSnapshot.id, ...userSnapshot.data()});
      });
      setUsersList(users);
    });
  }, []);

  const handlePressUser = user => () => {
    console.log(user);
  };

  const renderItem = ({item}) => (
    <Pressable
      onPress={handlePressUser(item)}
      style={({pressed}) => ({
        marginBottom: 12,
        padding: 8,
        borderRadius: 13,
        backgroundColor: '#2C98F0',
        opacity: pressed ? 0.5 : 1,
      })}>
      <Text style={{color: 'white'}}>{item.email}</Text>
    </Pressable>
  );

  return (
    <MainLayout>
      <FlatList
        renderItem={renderItem}
        data={usersList}
        contentContainerStyle={{padding: 12}}
      />
    </MainLayout>
  );
};
