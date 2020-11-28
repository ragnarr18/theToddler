import React from 'react';
import {
  Text, TextInput, Button,
} from 'react-native';
import Modal from '../../../modals/TaskModal';
import UpdateTask from '../../../services/updateTask';
import styles from './styles';

function updateAndClose(id, name, description, closeModal) {
  UpdateTask(id, name, description);
  closeModal();
}

class EditTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.task.name,
      description: props.task.description,
    };
  }

  updateName(text) {
    this.setState({ name: text });
  }

  updateDescription(text) {
    this.setState({ description: text });
  }

  render() {
    const { closeModal, isOpen, task } = this.props;
    const { id, name, description } = task;
    return (
      <Modal
        closeModal={closeModal}
        isOpen={isOpen}
      >
        <Text>Name:</Text>
        <TextInput
          placeholder={task.name}
          defaultValue={name}
          onChangeText={(text) => this.updateName(text)}
          style={styles.input}
        />

        <Text>Description: </Text>
        <TextInput
          placeholder={task.description}
          defaultValue={description}
          onChangeText={(text) => this.updateDescription(text)}
          style={styles.input}
        />
        <Button
          title="Update Task"
          onPress={() => updateAndClose(id, this.state.name, this.state.description, closeModal)}
        />
        <Button
          title="Cancel"
          onPress={closeModal}
        />
      </Modal>
    );
  }
}

export default EditTask;
