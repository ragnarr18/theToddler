import React from 'react';
import {
  TextInput, Text, Button,
} from 'react-native';
import Modal from '../../modals/BoardModal';
import styles from './styles';
import editBoard from '../../services/editBoard';

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.prevName, thumbnailPhoto: this.props.prevThumbnail };
  }

  updateName(text) {
    this.setState({ name: text });
  }

  updateThumbnail(text) {
    this.setState({ thumbnailPhoto: text });
  }

  editAndClose(id, name, thumbnailPhoto) {
    // console.log('onPress edit', name, thumbnailPhoto);
    const { closeModel } = this.props;
    if (name !== '' || thumbnailPhoto !== '') {
      editBoard(id, name, thumbnailPhoto);
    }
    closeModel();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevState);
    // console.log('now', this.state);

    // console.log(prevProps);
    // console.log('now', this.props);
    if (this.props.prevName !== prevProps.prevName) {
      this.setState({ name: this.props.prevName, thumbnailPhoto: this.props.prevThumbnail });
    }
  }

  render() {
    const {
      closeModel, isOpen, id, prevName, prevThumbnail, editSelected,
    } = this.props;
    const { name, thumbnailPhoto } = this.state;
    return (
      // {if (name === '' && thumbnailPhoto === '') {
      //   this.setInitialValues();
      // }}
      <Modal
        closeModel={closeModel}
        isOpen={isOpen}
      >
        <Text>Name:</Text>
        <TextInput
          placeholder={prevName}
          value={name}
          onChangeText={(text) => this.updateName(text)}
          style={styles.input}
        />

        <Text>URL to thumbnail:</Text>
        <TextInput
          placeholder={prevThumbnail}
          multiline
          value={thumbnailPhoto}
          onChangeText={(text) => this.updateThumbnail(text)}
          style={styles.input}
        />
        <Button
          title="Edit Board"
          onPress={() => this.editAndClose(id, name, thumbnailPhoto)}
        />
      </Modal>

    );
  }
}

export default InputComponent;
