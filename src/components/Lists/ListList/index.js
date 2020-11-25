import React from 'react';
import {
  View, FlatList, TouchableHighlight, Text,
} from 'react-native';
import styles from './styles';

const ListList = (props) => (
  <View style={styles.listOverhead}>
    <FlatList
      numColumns={1}
      data={props.lists}
      renderItem={({ item: { name, color } }) => (
        <TouchableHighlight style={{ backgroundColor: color }}>
          <Text style={styles.listText}>{name}</Text>
        </TouchableHighlight>
      )}
      keyExtractor={(listItem) => listItem.id}
    />
  </View>
);

export default ListList;
