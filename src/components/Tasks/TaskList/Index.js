import React from 'react';
import { View, Text } from 'react-native';
import TaskItem from '../TaskItem';
import data from '../../../resources/data.json';
import RemoveTask from '../../../services/RemoveTask';


class PureTaskList extends React.Component {
  constructor(props) {
    super(props);
    const { listId, navigation } = props;
    this.taskArray = [];
    this.listTasks = data.tasks.filter((task) => task.listId === listId);

    this.remove = function (id) {
      RemoveTask(id);
      // this.forceUpdate();
      this.setState({ someValue: 1 });
      console.log(this.state.someValue);
    }

    if (this.listTasks.length > 0) {
      this.listTasks.map((n) => (
        this.taskArray.push(
          <View>
            <TaskItem remove={this.remove} item={n} navigation={navigation} />
          </View>,
        )
      ));
    } else {
      // No tasks for this list.
      this.taskArray.push(
        <View style={{ justifyContent: 'center' }}>
          <Text>There seem to be no tasks</Text>
          <Text>Consider adding new tasks to this list</Text>
        </View>,
      );
    }
  }

  render() {
    return this.taskArray;
  }
}

const TaskList = React.memo(PureTaskList);
export default TaskList;
