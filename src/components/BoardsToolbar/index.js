import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const BoardsToolbar = ({ onAdd, onEdit, onRemove }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight onPress={onAdd}>
      <Text>AddBoard</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={onEdit}>
      <Text>EditBoard</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={onRemove}>
      <Text>RemoveBoard</Text>
    </TouchableHighlight>
  </View>
);

export default BoardsToolbar;
