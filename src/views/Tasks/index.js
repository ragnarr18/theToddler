import React from 'react';
import { View } from 'react-native';
import TaskToolbar from '../../components/Tasks/TaskToolbar';
import data from '../../resources/data.json';
import TaskList from '../../components/Tasks/TaskList/Index';
import RemoveTask from '../../services/RemoveTask';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = props;
    this.navigation = navigation;
    this.listId = navigation.state.params.listId;
    this.state = { someValue: 1 };
  }

  remove(id) {
    RemoveTask(id);
    this.setState({ someValue: 1 });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TaskList
          remove={(id) => this.remove(id)}
          listId={this.listId}
        />
        <TaskToolbar />
      </View>
    );
  }
}

// const Tasks = React.memo(PureTask);
export default Tasks;
