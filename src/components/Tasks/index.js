import React from 'react';
import { View, Text } from 'react-native';
// import { PropTypes } from 'prop-types';

function PureTaskItem(item) {
  const {
    id, name, description, isFinished, listId
  } = item;
  return (
    <View>
      <Text>
        Id:
        { id }
      </Text>
      <Text>
        Name:
        { name }
      </Text>
      <Text>
        Description:
        { description }
      </Text>
      <Text>
        Finished:
        { isFinished }
      </Text>
      <Text>
        List Id:
        { listId }
      </Text>
    </View>
  );
}
/*
PureTaskItem.defaultProps = {
  description: '',
};

PureTaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  isFinished: PropTypes.bool.isRequired,
  listId: PropTypes.number.isRequired,
};
*/

const TaskItem = React.memo(PureTaskItem);
export default TaskItem;
