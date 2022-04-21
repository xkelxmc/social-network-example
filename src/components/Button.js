import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {shadows} from '../ustils/styles';
import {PRIMARY} from '../ustils/theme/light';

export const Button = ({title, onPress, small}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {opacity: pressed ? 0.5 : 1},
        styles.root,
        small && styles.root_small,
      ]}>
      <Text style={[styles.text, small && styles.text_small]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: PRIMARY,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    paddingHorizontal: 12,
    borderRadius: 2,
    ...shadows('#000', 4, 4, 5, 0.2),
  },
  root_small: {
    height: 28,
    paddingHorizontal: 8,
  },
  text: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 14,
  },
  text_small: {
    fontSize: 10,
  },
});
