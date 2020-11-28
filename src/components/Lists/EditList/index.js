import React from 'react';
import {
  View, TextInput, Text, Button,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';
import Modal from '../../../modals/ListModal';
import styles from './styles';
import editList from '../../../services/editList';

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.prevName, color: this.props.prevColor };
  }

  componentDidUpdate(prevProps) {
    if (this.props.prevName !== prevProps.prevName) {
      this.setState({ name: this.props.prevName, color: this.props.prevColor });
    }
  }

  updateName(text) {
    this.setState({ name: text });
  }

  updateColor(text) {
    this.setState({ color: text });
  }

  editListAndClose(id, name, color) {
    let tempColor = color;
    // console.log('onPress edit', name, color);
    const { closeModel } = this.props;
    if (name !== '') {
      if (color === '' || color === this.props.prevColor) {
        tempColor = '#fafafa';
      }
      // console.log('color', tempColor);
      editList(id, name, tempColor);
      // console.log('true');
    }
    closeModel();
  }

  render() {
    const {
      closeModel, isOpen, id,
    } = this.props;
    const { name, color } = this.state;
    return (
      <Modal
        closeModel={closeModel}
        isOpen={isOpen}
      >
        <Text style={styles.title}>Edit List</Text>
        <Text style={styles.smallFont}>(Touch outside of box to exit this window)</Text>
        <Text style={styles.sectionText}>List Name:</Text>
        <TextInput
          placeholder="Grocery List"
          defaultValue={name}
          onChangeText={(text) => this.updateName(text)}
          style={styles.input}
        />
        <Text style={styles.sectionText}>List color (Optional):</Text>
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
          value={color}
          placeholder="Select a color!"
          containerStyle={{
            height: 40,
          }}
          style={styles.inputDropdown}
          itemStyle={{
            justifyContent: 'center',
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={(item) => this.setState({
            color: item.value,
          })}
        />
        <View style={styles.button}>
          <Button
            title="Edit List"
            onPress={() => this.editListAndClose(id, name, color)}
            style={styles.button}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Cancel"
            onPress={closeModel}
            color="#bbbbbb"
            style={styles.button}
          />
        </View>
      </Modal>
    );
  }
}

InputComponent.propTypes = {
  prevName: PropTypes.string.isRequired,
  prevColor: PropTypes.string.isRequired,
  closeModel: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default InputComponent;
