import React from 'react';
import { View, Text } from 'react-native';
import TaskItem from '../TaskItem';
import data from '../../../resources/data.json';
import RemoveTask from '../../../services/RemoveTask';


class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { listId, navigation, remove } = this.props;
    const taskArray = [];
    const listTasks = data.tasks.filter((task) => task.listId === listId);
    if (listTasks.length > 0) {
      listTasks.map((n) => (
        taskArray.push(
          <View>
            <TaskItem remove={remove} item={n} navigation={navigation} />
          </View>,
        )
      ));
    } else {
      // No tasks for this list.
      taskArray.push(
        <View style={{ justifyContent: 'center' }}>
          <Text>There seem to be no tasks</Text>
          <Text>Consider adding new tasks to this list</Text>
        </View>,
      );
    }

    return taskArray;
  }
}

// const TaskList = React.memo(PureTaskList);
export default TaskList;
