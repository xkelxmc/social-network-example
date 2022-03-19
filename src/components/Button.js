import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {isAndroid} from '../ustils/global';
import {shadows} from '../ustils/styles';

export const Button = ({title, onPress}) => {
  const bgColor = isAndroid ? '#2F80ED' : 'transparent';
  const textColor = isAndroid ? '#ffffff' : '#2F80ED';

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {opacity: pressed ? 0.5 : 1, backgroundColor: bgColor},
        styles.root,
      ]}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: isAndroid ? 16 : 4,
    ...shadows('#000', 4, 4, 5, 0.2),
  },
  text: {
    fontSize: isAndroid ? 20 : 16,
    fontWeight: isAndroid ? '400' : '500',
  },
});
