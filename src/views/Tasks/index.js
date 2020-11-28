import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import TaskToolbar from '../../components/Tasks/TaskToolbar';
import data from '../../resources/data.json';
import TaskList from '../../components/Tasks/TaskList/Index';
import RemoveTask from '../../services/RemoveTask';
import AddTask from '../../components/Tasks/AddTask';
import styles from './style';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = props;
    this.navigation = navigation;
    this.listId = navigation.state.params.listId;
    this.state = {
      updateValue: 1,
      isAddModalOpen: false,
      isMoveModalOpen: false,
      isEditModalOpen: false,
    };
    const currList = data.lists.find((x) => x.id === this.listId);
    this.listColor = currList.color;
    this.listName = currList.name;
  }

  update() {
    this.setState({ updateValue: 1 });
  }

  closeEdit() {
    this.setState({ isEditModalOpen: false });
  }

  closeMove() {
    this.setState({ isMoveModalOpen: false });
  }

  remove(id) {
    RemoveTask(id);
    this.update();
  }

  render() {
    const functions = {
      update: this.update,
    };
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: this.listColor, borderBottomWidth: 3 }}>
          <Text style={styles.title}>
            {this.listName}
          </Text>
        </View>
        <TaskList
          remove={(id) => this.remove(id)}
          functions={functions}
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

Tasks.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.shape({
      updateValue: PropTypes.number,
      isAddModalOpen: PropTypes.bool,
      isEditModalOpen: PropTypes.bool,
      isMoveModalOpen: PropTypes.bool,
      params: PropTypes.shape({
        listId: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

// const Tasks = React.memo(PureTask);
export default Tasks;
