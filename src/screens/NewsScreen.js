import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {MainLayout} from '../layouts/MainLayout';
import {shadows} from '../ustils/styles';
import {postCollection} from '../interface-adapters/db/collections';

export const NewsScreen = () => {
  const [posts, setPosts] = React.useState([]);
  const [state, setState] = React.useState('loading');

  useEffect(() => {
    postCollection
      .orderBy('createdAt', 'desc')
      .get()
      .then(querySnapshot => {
        if (querySnapshot && querySnapshot.size > 0) {
          const list = [];
          querySnapshot.forEach(postSnapshot => {
            list.push({id: postSnapshot.id, ...postSnapshot.data()});
          });
          setPosts(list);
          setState('success');
        }
      });
  }, []);

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
      {state === 'loading' && <ActivityIndicator />}
      <FlatList
        renderItem={renderItem}
        data={posts}
        style={{
          flex: 1,
          marginTop: 20,
        }}
        contentContainerStyle={{
          paddingHorizontal: 12,
        }}
      />
    </MainLayout>
  );
};
