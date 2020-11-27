import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import RemoveTask from '../../../services/RemoveTask';

class TaskDetailsItem extends React.Component {
  constructor(props) {
    super(props);
    const { item, navigation } = props;

    this.id = item.id;
    this.name = item.name;
    this.navigation = navigation;
    this.isFinished = item.isFinished;
    this.description = item.description;
  }

  removeItem() {
    // Delete update'ar ekki skjáinn eins og er
    RemoveTask(this.id);
    this.navigation.goBack();
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
        <Text>{this.id}</Text>
        <Text>{this.name}</Text>
        <Text>{this.description}</Text>
        <Text>{this.isFinished}</Text>
        <TouchableHighlight onPress={() => this.removeItem()}>
          <Text>Remove</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

// const TaskDetailsItem = React.memo(PureTaskDetailsItem);
export default TaskDetailsItem;
