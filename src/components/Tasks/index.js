import React from 'react';
import { View, Text } from 'react-native';
import { PropTypes } from 'prop-types';

const TaskItem = (props) => {
  const {
    name, description, finished, listId,
  } = props;

    <View>
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
        { finished }
      </Text>
      <Text>
        List Id:
        { listId }
      </Text>
    </View>;
};

TaskItem.PropTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  finished: PropTypes.bool.isRequired,
  listId: PropTypes.number.isRequired,
};

TaskItem.propDefault = {
  description: '',
};

export default TaskItem;
