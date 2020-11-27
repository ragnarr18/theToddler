import React from 'react';
import {
  Text, TextInput, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../../../modals/TaskModal';
import CreateTask from '../../../services/createTask';
import styles from './styles';

function createAndClose(name, description, listId, closeModal) {
  // console.log('close!', closeModal);
  CreateTask(name, description, listId);
  closeModal();
}

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
    const { closeModal, isOpen, listId } = this.props;
    const { name, description } = this.state;

    return (
      <Modal
        closeModel={closeModal}
        isOpen={isOpen}
      >
        <Text style={styles.title}>Create Task</Text>
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
          onPress={() => createAndClose(name, description, listId, closeModal)}
        />
        <Button
          title="Cancel"
          onPress={closeModal}
        />
      </Modal>
    );
  }
}

AddTask.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  listId: PropTypes.number.isRequired,
};

export default AddTask;
