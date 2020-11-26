import React from 'react';
import {
  TextInput, Text, Button,
} from 'react-native';
import Modal from '../../../modals/BoardModal';
import styles from './styles';
import createList from '../../../services/createList';

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', color: '' };
  }

  updateName(text) {
    this.setState({ name: text });
  }

  updateColor(text) {
    this.setState({ color: text });
  }

  render() {
    const { closeModel, isOpen, boardId } = this.props;
    const { name, color } = this.state;
    return (
      <Modal
        closeModel={closeModel}
        isOpen={isOpen}
      >
        <Text>List Name:</Text>
        <TextInput
          placeholder="Grocery List"
          value={name}
          onChangeText={(text) => this.updateName(text)}
          style={styles.input}
        />

        <Text>List color:</Text>
        <TextInput
          placeholder="white, black, purple"
          multiline
          value={color}
          onChangeText={(text) => this.updateColor(text)}
          style={styles.input}
        />
        <Button
          title="Create List"
          onPress={() => createList(name, color, boardId)}
        />
      </Modal>
    );
  }
}

export default InputComponent;
