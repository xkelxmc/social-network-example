import React, {useEffect, useState} from 'react';
import {Text, FlatList, StyleSheet, View, Pressable} from 'react-native';
import {MainLayout} from '../layouts/MainLayout';
import {Button} from '../components/Button';
import {userCollection} from '../interface-adapters/db/collections';

export const UsersListScreen = () => {
  // const [text, setText] = useState('Useless');
  // const [number, onChangeNumber] = useState(null);
  // const [showPassword, setShowPassword] = useState(false);
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

  // const onChangeText = value => {
  //   if (value.length <= 10) {
  //     setText(value);
  //   }
  // };
  //
  // const togglePassword = () => {
  //   setShowPassword(prev => !prev);
  // };

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
      {/*<View*/}
      {/*  style={{flexDirection: 'row', alignItems: 'center', paddingRight: 10}}>*/}
      {/*  <TextInput*/}
      {/*    style={styles.input}*/}
      {/*    onChangeText={onChangeText}*/}
      {/*    value={text}*/}
      {/*    maxLength={10}*/}
      {/*    autoFocus*/}
      {/*    secureTextEntry={!showPassword}*/}
      {/*  />*/}
      {/*  <Button*/}
      {/*    title={!showPassword ? 'show' : 'hide'}*/}
      {/*    onPress={togglePassword}*/}
      {/*  />*/}
      {/*</View>*/}
      {/*<TextInput*/}
      {/*  style={styles.input}*/}
      {/*  onChangeText={onChangeNumber}*/}
      {/*  value={number}*/}
      {/*  multiline*/}
      {/*  placeholderTextColor="red"*/}
      {/*  placeholder="useless placeholder"*/}
      {/*  keyboardType="numeric"*/}
      {/*/>*/}
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#959595',
    borderRadius: 12,
    padding: 10,
    color: 'blue',
  },
});
