import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const ListToolbar = ({ onAdd, onEdit, onRemove }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight onPress={onAdd} styles={styles.toolbarAction}>
      <Text>Add List</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={onEdit} styles={styles.toolbarAction}>
      <Text>Edit List</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={onRemove} styles={styles.toolbarAction}>
      <Text>Remove List</Text>
    </TouchableHighlight>
  </View>
);

export default ListToolbar;
