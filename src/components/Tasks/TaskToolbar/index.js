import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from '../../../styles/bottomToolbar';

function PureTaskToolbar({ onAdd, onEdit, onRemove }) {
  return (
    <View styleName="horizontal" style={styles.toolbar}>
      <TouchableHighlight onPress={onAdd} style={styles.toolbarAction}>
        <Text style={styles.toolbarActionText}>Add Task</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={onEdit} style={styles.toolbarAction}>
        <Text style={styles.toolbarActionText}>Edit Task</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={onRemove} style={styles.toolbarAction}>
        <Text style={styles.toolbarActionText}>Remove Task</Text>
      </TouchableHighlight>
    </View>
  );
}

const TaskToolbar = React.memo(PureTaskToolbar);
export default TaskToolbar;
