import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Lists/Header';
import BottomToolbar from '../../components/Lists/BottomToolbar';

function PureTask(props) {
  const taskList = [];
  data.tasks.map((n) => (
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
