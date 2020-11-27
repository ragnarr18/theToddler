import React from 'react';
import {
  TextInput, Text, Button,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from '../../../modals/ListModal';
import styles from './styles';
import RemoveList from '../../../services/removeList';

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', color: '' };
  }

  updateName(text) {
    this.setState({ name: text });
  }

  render() {
    const { closeModel, isOpen, boardId } = this.props;
    const { name, color } = this.state;
    return (
      <Modal
        closeModel={closeModel}
        isOpen={isOpen}
      >
        <Text style={styles.title}>Remove List</Text>
        <Text style={styles.smallFont}>(Touch outside of box to exit this window)</Text>
        <Text>Name of List to remove:</Text>
        <TextInput
          placeholder="Name of list..."
          value={name}
          onChangeText={(text) => this.updateName(text)}
          style={styles.input}
        />

        <Button
          title="Remove List"
          onPress={() => RemoveList(name)}
        />
        <Button
          title="Return"
          onPress={closeModel}
        />
      </Modal>
    );
  }
}

export default InputComponent;
