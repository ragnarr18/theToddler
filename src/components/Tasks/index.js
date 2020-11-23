import React from 'react';
import { View, Text } from 'react-native';

class Task extends React.Components {
  render() {
    const {
      name, description, finished, listId,
    } = this.props;
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
          { finished }
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
