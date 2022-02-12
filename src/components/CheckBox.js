import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, View} from 'react-native';

export const CheckBox = ({text, checked}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <MaterialCommunityIcons
        name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
        size={24}
        color={'#2F80ED'}
      />
      <Text style={{marginLeft: 8}}>{text}</Text>
    </View>
  );
};
