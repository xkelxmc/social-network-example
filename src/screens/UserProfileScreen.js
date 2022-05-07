import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Button} from '../components/Button';
import {useTranslation} from 'react-i18next';
import {MainLayout} from '../layouts/MainLayout';
import {
  CHANGE_PROFILE_SCREEN,
  CREATE_POST_SCREEN,
} from '../ustils/constatnts/navigation_const';
import {useNavigation} from '@react-navigation/native';
import {useAuthContext} from '../services/authService';
import {UserContainer} from '../components/UserContainer';
import {postCollection} from '../interface-adapters/db/collections';
import {shadows} from '../ustils/styles';

export const UserProfileScreen = ({
  route: {
    params: {isMe, user},
  },
}) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {user: currentUser, userData} = useAuthContext();
  const [posts, setPosts] = React.useState([]);

  console.log({isMe, user, currentUser, userData});

  useEffect(() => {
    const subscription = postCollection
      .where('userId', '==', isMe ? currentUser.uid : user.id)
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        if (querySnapshot && querySnapshot.size > 0) {
          const list = [];
          querySnapshot.forEach(postSnapshot => {
            list.push({id: postSnapshot.id, ...postSnapshot.data()});
          });
          setPosts(list);
        }
      });
    return () => subscription();
  }, []);

  const goToChangeProfile = () => {
    navigation.navigate(CHANGE_PROFILE_SCREEN);
  };
  const goToAddPost = () => {
    navigation.navigate(CREATE_POST_SCREEN);
  };

  const renderItem = ({item}) => (
    <View
      style={{
        marginBottom: 12,
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 13,
        ...shadows('#000', 4, 4, 5, 0.2),
      }}>
      <Text style={{fontSize: 22}}>{item.title}</Text>
      <Text style={{fontSize: 16}}>{item.content}</Text>
    </View>
  );

  return (
    <MainLayout>
      <View>
        {isMe &&
          (userData ? (
            <UserContainer user={userData}>
              <Button
                title={t('screens.homeStack.myPage.changeProfile')}
                onPress={goToChangeProfile}
                small
              />
            </UserContainer>
          ) : (
            <ActivityIndicator />
          ))}
        {!isMe && <UserContainer user={user} />}
      </View>
      <View style={styles.container}>
        {isMe && (
          <Button
            title={t('screens.homeStack.myPage.addPost')}
            onPress={goToAddPost}
          />
        )}
        <FlatList
          renderItem={renderItem}
          data={posts}
          style={{
            flex: 1,
            marginTop: 12,
            marginLeft: -12,
            marginRight: -12,
          }}
          contentContainerStyle={{
            paddingHorizontal: 12,
          }}
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});
