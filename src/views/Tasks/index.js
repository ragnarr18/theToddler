import React from 'react';
import View from 'react-native';
import Header from '../../components/Lists/Header';
import BottomToolbar from '../../components/Lists/BottomToolbar';
import data from '../../resources/data.json';
import TaskItem from '../../components/Tasks/index';

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
    <View>
      <Header />
      { taskList }
      <BottomToolbar />
    </View>
  );
}

const Tasks = React.memo(PureTask);
export default Tasks;
