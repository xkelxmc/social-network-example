import React, {useState} from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';
import {MainLayout} from '../layouts/MainLayout';
import {Button} from '../components/Button';

export const UsersListScreen = () => {
  const [text, setText] = useState('Useless');
  const [number, onChangeNumber] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const onChangeText = value => {
    if (value.length <= 10) {
      setText(value);
    }
  };

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <MainLayout>
      <Text numberOfLines={2}>
        UsersListScreen UsersListScreen UsersListScreen UsersListScreen
        UsersListScreen UsersListScreen UsersListScreen UsersListScreen
      </Text>
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingRight: 10}}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          maxLength={10}
          autoFocus
          secureTextEntry={!showPassword}
        />
        <Button
          title={!showPassword ? 'show' : 'hide'}
          onPress={togglePassword}
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        multiline
        placeholderTextColor="red"
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
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
