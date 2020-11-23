import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';

const BoardsList = ({ boardsItems }) => (
  <View style={styles.container}>
    {console.log(boardsItems)}
    <FlatList
      numColoms={3}
      data={boardsItems}
      renderItem={({ item: { thumbnailPhoto, name } }) => (
        <Text>{name}</Text>
      )}
      keyExtractor={(boardsItems) => boardsItems.name}
    />
  </View>
);

export default BoardsList;
