import React from 'react';
import { View } from 'react-native';
import TaskItem from '../TaskItem';
import data from '../../../resources/data.json';

function PureTaskList(props) {
  const { listId } = props;
  const taskArray = [];
  const listTasks = data.Tasks.filter((task) => task.listId === listId);
  listTasks.map((n) => (
    taskArray.push(
      <View>
        <TaskItem props={n} />
      </View>,
    )
  ));
}

const TaskList = React.memo(PureTaskList);
export default TaskList;
