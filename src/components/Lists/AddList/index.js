import React from 'react';
import {
  TextInput, Text, Button,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from '../../../modals/ListModal';
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

  createListAndClose(name, color, boardId) {
    const { closeModel } = this.props;
    createList(name, color, boardId);
    closeModel();
  }

  render() {
    const { closeModel, isOpen, boardId } = this.props;
    const { name, color } = this.state;
    return (
      <Modal
        closeModel={closeModel}
        isOpen={isOpen}
      >
        <Text style={styles.title}>Create New List</Text>
        <Text style={styles.smallFont}>(Touch outside of box to exit this window)</Text>
        <Text>List Name:</Text>
        <TextInput
          placeholder="Grocery List"
          defaultValue="New List"
          value={name}
          onChangeText={(text) => this.updateName(text)}
          style={styles.input}
        />

        <Text>List color:</Text>
        <DropDownPicker
          items={[
            {
              label: 'White', value: '#fafafa', selected: true,
            },
            { label: 'Gray', value: '#808080' },
            { label: 'Red', value: '#FF0000' },
            { label: 'Green', value: '#008000' },
            { label: 'Blue', value: '#0000FF' },
          ]}
          defaultValue="#fafafa"
          placeholder="Select a color!"
          containerStyle={{
            height: 40,
          }}
          style={styles.input}
          itemStyle={{
            justifyContent: 'center',
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={(item) => this.setState({
            color: item.value,
          })}
        />
        <Button
          title="Create List"
          onPress={() => this.createListAndClose(name, color, boardId)}
        />
      </Modal>
    );
  }
}

export default InputComponent;
