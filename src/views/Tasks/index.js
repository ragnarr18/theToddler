import React from 'react';
import { View } from 'react-native';
import TaskToolbar from '../../components/Tasks/TaskToolbar';
import data from '../../resources/data.json';
import TaskItem from '../../components/Tasks/TaskItem/index';

function PureTask(props) {
  const { navigation } = props;
  const { listId } = navigation.state.params;
  const { tasks } = data;
  const tempArray = tasks.filter((task) => task.listId === listId);
  const taskList = [];
  tempArray.map((n) => (
    taskList.push(
      <View>
        <TaskItem item={n} />
      </View>,
    )));

  return (
    // header is automatically applied
    <View>
      { taskList }
      <TaskToolbar />
    </View>
  );
}

const Tasks = React.memo(PureTask);
export default Tasks;
