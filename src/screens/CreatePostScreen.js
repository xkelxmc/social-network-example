import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Alert,
  Text,
  ActivityIndicator,
} from 'react-native';
import {MainLayout} from '../layouts/MainLayout';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {postCollection} from '../interface-adapters/db/collections';
import {USER_PROFILE_SCREEN} from '../ustils/constatnts/navigation_const';
import {useAuthContext} from '../services/authService';

export const CreatePostScreen = () => {
  const navigation = useNavigation();
  const {user} = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    title: '',
    content: '',
  });

  const onChangeText = name => value => {
    setForm(prev => ({...prev, [name]: value}));
  };

  const createNewPost = useCallback(() => {
    if (form.title.length > 0 && form.content.length > 0) {
      setIsLoading(true);
      postCollection
        .add({
          userId: user.uid,
          title: form.title,
          content: form.content,
          createdAt: new Date(),
        })
        .then(() => {
          setIsLoading(false);
          setForm({title: '', content: ''});
          Alert.alert('Success', 'Post created successfully');
          navigation.navigate(USER_PROFILE_SCREEN);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [form.content, form.title, navigation, user.uid]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={createNewPost}
          style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}>
          <MaterialCommunityIcons
            name={'checkbox-marked'}
            size={24}
            color={'#fff'}
          />
        </Pressable>
      ),
    });
  }, [createNewPost, navigation]);

  return (
    <MainLayout>
      {isLoading && (
        <View style={styles.loading}>
          <Text>Post creating...</Text>
          <ActivityIndicator />
        </View>
      )}
      <View style={styles.root}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText('title')}
          value={form.title}
          maxLength={200}
          autoFocus
          placeholder="Post title"
          editable={!isLoading}
        />
        <View style={{flex: 1, paddingTop: 12}}>
          <TextInput
            editable={!isLoading}
            style={[styles.input, styles.multiline]}
            onChangeText={onChangeText('content')}
            value={form.content}
            multiline
            placeholder="Post content"
          />
        </View>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  loading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  root: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  multiline: {
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#959595',
    borderRadius: 12,
    padding: 10,
  },
});
