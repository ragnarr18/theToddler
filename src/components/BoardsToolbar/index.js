import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const BoardsToolbar = ({ onAdd, onEdit, onRemove }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
      <Text>AddBoard</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.toolbarAction} onPress={onEdit}>
      <Text>EditBoard</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.toolbarAction} onPress={onRemove}>
      <Text>RemoveBoard</Text>
    </TouchableHighlight>
  </View>
);

export default BoardsToolbar;
