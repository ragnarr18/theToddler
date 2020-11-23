import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

const BoardItem = (src, name) => (
  <View>
    <View>
      <Image style={styles.container} source={src}> </Image>
    </View>
    <View>
      <Text>{name}</Text>
    </View>
  </View>
);

export default BoardItem;
