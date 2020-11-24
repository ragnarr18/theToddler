import React from 'react';
import { View, FlatList, Text } from 'react-native';

const ListList = (props) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={1}
      data={props.lists}
      renderItem={({ item: { name, color } }) => (
        <Text style={{ backgroundColor: color }}>{name}</Text>
      )}
      keyExtractor={(listItem) => listItem.id}
    />
  </View>
);

export default ListList;
