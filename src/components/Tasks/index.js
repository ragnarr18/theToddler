import React from 'react';
import { View, Text } from 'react-native';
import { PropTypes } from 'prop-types';

function PureTaskItem(props) {
  const { item } = props;
  const {
    id, name, description, isFinished, listId,
  } = item;

  let status = 'not finished';
  if (isFinished) { status = 'finisehd'; }
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
        { status }
      </Text>
      <Text>
        List Id:
        { listId }
      </Text>
    </View>
  );
}

PureTaskItem.defaultProps = {
  description: '',
};

PureTaskItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  isFinished: PropTypes.bool.isRequired,
  listId: PropTypes.number.isRequired,
};

const TaskItem = React.memo(PureTaskItem);
export default TaskItem;
