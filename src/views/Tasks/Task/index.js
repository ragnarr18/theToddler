import React from 'react';
import { View } from 'react-native';
import TaskToolbar from '../../../components/Tasks/TaskToolbar';
import data from '../../../resources/data.json';
import TaskList from '../../../components/Tasks/TaskList/Index';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = props;
    this.navigation = navigation;
    this.listId = navigation.state.params.listId;
    this.state = { someValue: 1 };
  }

  render() {
    return (
      <View>
        <TaskList listId={this.listId} navigation={this.navigation} />
        <TaskToolbar />
      </View>
    );
  }
}

// const Tasks = React.memo(PureTask);
export default Tasks;
