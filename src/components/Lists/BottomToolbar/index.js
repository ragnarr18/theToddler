import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const ListToolbar = ({ onAdd, onEdit, onRemove }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight onPress={onAdd} style={styles.toolbarAction}>
      <Text style={styles.toolbarActionText}>Add List</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={onEdit} style={styles.toolbarAction}>
      <Text style={styles.toolbarActionText}>Edit List</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={onRemove} style={styles.toolbarAction}>
      <Text style={styles.toolbarActionText}>Remove List</Text>
    </TouchableHighlight>
  </View>
);

export default ListToolbar;
