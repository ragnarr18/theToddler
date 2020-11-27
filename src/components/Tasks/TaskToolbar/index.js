import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from '../../../styles/bottomToolbar';

function PureTaskToolbar({
  onAdd,
}) {
  return (
    <View style={styles.toolbarContainer}>
      <View styleName="horizontal" style={styles.toolbar}>
        <TouchableHighlight onPress={onAdd} style={styles.toolbarAction}>
          <Text style={styles.toolbarActionText}>Add Task</Text>
        </TouchableHighlight>
        {/* <TouchableHighlight onPress={onMove} style={styles.toolbarAction}>
          <Text style={styles.toolbarActionText}>Move Task</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={onEdit} style={styles.toolbarAction}>
          <Text style={styles.toolbarActionText}>Edit Task</Text>
        </TouchableHighlight> */}
      </View>
    </View>
  );
}
PureTaskToolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

const TaskToolbar = React.memo(PureTaskToolbar);
export default TaskToolbar;
