import React from 'react';
import {
  View, Text, TextInput, Button,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Modal from '../../../modals/TaskModal';
import UpdateTask from '../../../services/updateTask';
import styles from './styles';

function updateAndClose(id, name, description, finished, closeModal) {
  UpdateTask(id, name, description, finished);
  closeModal();
}

class EditTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.task.name,
      description: props.task.description,
      isFinished: props.task.isFinished,
    };
  }

  updateName(text) {
    this.setState({ name: text });
  }

  updateDescription(text) {
    this.setState({ description: text });
  }

  updateStatus() {
    const { isFinished } = this.state;
    this.setState({ isFinished: !isFinished });
  }

  render() {
    const { closeModal, isOpen, task } = this.props;
    const { id, name, description } = task;
    return (
      <Modal
        closeModal={closeModal}
        isOpen={isOpen}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 5 }}>Edit Task</Text>
        <Text style={{ fontWeight: 'bold' }}>Name</Text>
        <TextInput
          placeholder={task.name}
          defaultValue={name}
          onChangeText={(text) => this.updateName(text)}
          style={styles.input}
        />

        <Text style={{ fontWeight: 'bold' }}>Description</Text>
        <TextInput
          multiline
          numberOfLines={3}
          placeholder={task.description}
          defaultValue={description}
          onChangeText={(text) => this.updateDescription(text)}
          style={styles.input}
        />

        <CheckBox
          center
          title="Completed"
          checked={this.state.isFinished}
          onPress={() => this.updateStatus()}
        />
        <View style={styles.button}>
          <Button
            title="Update Task"
            onPress={() => updateAndClose(
              id,
              this.state.name,
              this.state.description,
              this.state.isFinished,
              closeModal,
            )}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Cancel"
            color="#bbbbbb"
            onPress={closeModal}
          />
        </View>
      </Modal>
    );
  }
}

export default EditTask;
