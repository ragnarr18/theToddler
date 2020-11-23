import React from 'react';
import { View, Text } from 'react-native';

class Task extends React.Components {
  render() {
    const {
      name, description, finished, listId,
    } = this.props;
    let finishedText = 'not finished';
    if (finished) { finishedText = 'task finished'; }

    return (
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
          { finishedText }
        </Text>
        <Text>
          List Id:
          { listId }
        </Text>
      </View>
    );
  }
}

export default Task;
