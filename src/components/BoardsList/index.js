import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import ImageThumbnail from '../ImageThumbnail';

const BoardsList = ({ boardsItems }) => (
  <View styleName="horizontal" style={styles.container}>
    {console.log(boardsItems)}
    <FlatList
      numColumns={3}
      data={boardsItems}
      renderItem={({ item: { thumbnailPhoto, name } }) => (
        <View style={styles.boarderItem}>
          <ImageThumbnail source={thumbnailPhoto} />
          <Text>{name}</Text>
        </View>
      )}
      keyExtractor={(boardsItem) => boardsItem.name}
    />
  </View>
);

export default BoardsList;
