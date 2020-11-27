import React from 'react';
import { View } from 'react-native';
import TaskToolbar from '../../components/Tasks/TaskToolbar';
import data from '../../resources/data.json';
import TaskList from '../../components/Tasks/TaskList/Index';
import RemoveTask from '../../services/RemoveTask';
import AddTask from '../../components/Tasks/AddTask';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = props;
    this.navigation = navigation;
    this.listId = navigation.state.params.listId;
    this.state = {
      updateValue: 1,
      isAddModalOpen: false
    };
  }

  update() {
    this.setState({ updateValue: 1 });
  }

  remove(id) {
    RemoveTask(id);
    this.update();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TaskList
          remove={(id) => this.remove(id)}
          listId={this.listId}
        />
        <AddTask
          isOpen={(this.state.isAddModalOpen)}
          closeModal={() => this.setState({ isAddModalOpen: false })}
          listId={this.listId}
        />
        <TaskToolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
        />
      </View>
    );
  }
}

// const Tasks = React.memo(PureTask);
export default Tasks;
