import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from '../../styles/bottomToolbar';

const BoardsToolbar = ({ onAdd, onEdit, onDelete }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
      <Text style={styles.toolbarActionText}>AddBoard</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.toolbarAction} onPress={onEdit}>
      <Text style={styles.toolbarActionText}>EditBoard</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.toolbarAction} onPress={onDelete}>
      <Text style={styles.toolbarActionText}>RemoveBoard</Text>
    </TouchableHighlight>
  </View>
);

BoardsToolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onEdit: PropTypes.bool.isRequired,
  onDelete: PropTypes.bool.isRequired,
};

export default BoardsToolbar;
