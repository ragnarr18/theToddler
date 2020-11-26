import React from 'react';
import { View } from 'react-native';
import TaskToolbar from '../../components/Tasks/TaskToolbar';
import data from '../../resources/data.json';
import TaskItem from '../../components/Tasks/TaskItem/index';
import TaskList from '../../components/Tasks/TaskList/Index';

function PureTask(props) {
  const { navigation } = props;
  const { listId } = navigation.state.params;
  return (
    <View>
      <TaskList listId={listId} />
      <TaskToolbar />
    </View>
  );
}

const Tasks = React.memo(PureTask);
export default Tasks;
