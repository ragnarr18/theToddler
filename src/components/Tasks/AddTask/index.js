import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Modal from '../../../modals/TaskModal';
import CreateTask from '../../services/createTask';
import styles from './styles';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
  }

  updateName(text) {
    this.setState({ name: text });
  }

  updateDescription(text) {
    this.setState({ description: text });
  }

  render() {
    const { closeModal, isOpen } = this.props;
    const { name, description } = this.state;

    return (
      <Modal
        closeModal={closeModal}
        isOpen={isOpen}
      >
        <Text>Name:</Text>
        <TextInput
          placeholder="Task Name"
          value={name}
          onChangeText={(text) => this.updateName(text)}
          style={styles.input}
        />

        <Text>Description: </Text>
        <TextInput
          placeholder="Task Description"
          value={description}
          onChangeText={(text) => this.updateDescription(text)}
          style={styles.input}
        />
        <Button
          title="Create Task"
          onPress={() => createTask(name, description)}
        />
      </Modal>
    );
  }
}

export default AddTask;
