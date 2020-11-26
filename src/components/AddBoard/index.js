import React from 'react';
import {
  View, TextInput, Text, TouchableOpacity, Button, Alert,
} from 'react-native';
import Modal from '../../modals/BoardModal';
import styles from './styles';
import createBoard from '../../services/createBoard';

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', thumbnailPhoto: '' };
  }

  updateName(text) {
    this.setState({ name: text });
  }

  updateThumbnail(text) {
    this.setState({ thumbnailPhoto: text });
  }

  render() {
    const { closeModel, isOpen } = this.props;
    const { name, thumbnailPhoto } = this.state;
    return (
      <Modal
        closeModel={closeModel}
        isOpen={isOpen}
      >
        <Text>Name:</Text>
        <TextInput
          placeholder="Paris summer 2018"
          value={name}
          onChangeText={(text) => this.updateName(text)}
          style={styles.input}
        />

        <Text>URL to thumbnail:</Text>
        <TextInput
          placeholder="e.g. tom-jerry-1.jpg"
          multiline
          value={thumbnailPhoto}
          onChangeText={(text) => this.updateThumbnail(text)}
          style={styles.input}
        />
        <Button
          title="Create Board"
          onPress={() => createBoard(name, thumbnailPhoto)}
        />
      </Modal>

    );
  }
}

export default InputComponent;
