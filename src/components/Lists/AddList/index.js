import React from 'react';
import {
  TextInput, Text, Button,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from '../../../modals/BoardModal';
import styles from './styles';
import createList from '../../../services/createList';

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'New list', color: '#fafafa' };
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
        <DropDownPicker
          items={[
            {
              label: 'White', value: '#fafafa', selected: true,
            },
            { label: 'Gray', value: '#808080' },
            { label: 'Red', value: '#FF0000' },
          ]}
          defaultValue={color}
          placeholder="Select a color!"
          containerStyle={{
            height: 40,
            width: 150,
          }}
          style={{
            backgroundColor: '#fafafa',
            width: 40,
          }}
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
          onPress={() => createList(name, color, boardId)}
        />
      </Modal>
    );
  }
}

export default InputComponent;
