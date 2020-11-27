import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { PropTypes } from 'prop-types';
import styles from './styles';

function PureTaskItem(props) {
  const icon = require('../../../images/delete.png');
  const { navigation, item } = props;
  const { navigate } = navigation;
  const {
    name, description, isFinished,
  } = item;

  const renderView = () => {
    let check = null;
    if (isFinished) {
      check = <View style={styles.checkbox} />;
    } else {
      check = <View style={styles.checkboxDone} />;
    }
    return (
      <View style={styles.iconView}>
        {check}
        <TouchableHighlight onPress={() => navigate('TaskDetails', { item })}>
          <Text>
            {name}
          </Text>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <View>
      {renderView()}
    </View>
  );
}

/*
PureTaskItem.defaultProps = {
  description: '',
};

PureTaskItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    isFinished: PropTypes.bool.isRequired,
    listId: PropTypes.number.isRequired
  })).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
*/

const TaskItem = React.memo(PureTaskItem);
export default TaskItem;
