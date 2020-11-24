import React from 'react';
import {
  View, Text, FlatList, TouchableHighlight,
} from 'react-native';
import styles from './styles';
import ImageThumbnail from '../ImageThumbnail';

const BoardsList = (props) => (
  <View styleName="horizontal" style={styles.container}>
    <FlatList
      numColumns={3}
      data={props.boardsItems}
      renderItem={({ item }) => (
        <View style={styles.boarderItem}>
          {console.log(props)}
          <TouchableHighlight key={item.id} onPress={() => props.navigation.navigate('Lists', {borderId: item.id})}>
            <View>
              <ImageThumbnail source={item.thumbnailPhoto} />
              <Text>{item.name}</Text>
            </View>
          </TouchableHighlight>
        </View>
      )}
      keyExtractor={(boardsItem) => boardsItem.name}
    />
  </View>
);

export default BoardsList;
