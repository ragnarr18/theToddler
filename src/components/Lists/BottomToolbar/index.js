import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const ListToolbar = ({ onAdd, onEdit, onRemove }) => (
  <View styleName="horizontal">
    <TouchableHighlight onPress={onAdd}>
      <Text>Add List</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={onEdit}>
      <Text>Edit List</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={onRemove}>
      <Text>Remove List</Text>
    </TouchableHighlight>
  </View>
);

export default ListToolbar;
