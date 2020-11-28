import React from 'react';
import {
  TextInput, Text, Button,
} from 'react-native';
import { PropTypes } from 'prop-types';
import Modal from '../../modals/BoardModal';
import styles from './styles';
import editBoard from '../../services/editBoard';

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    const { prevName, prevThumbnail } = this.props;
    this.state = { name: prevName, thumbnailPhoto: prevThumbnail };
  }

  componentDidUpdate(prevProps) {
    const { prevName, prevThumbnail } = this.props;
    if (prevName !== prevProps.prevName) {
      this.setState({ name: prevName, thumbnailPhoto: prevThumbnail });
    }
  }

  updateName(text) {
    this.setState({ name: text });
  }

  updateThumbnail(text) {
    this.setState({ thumbnailPhoto: text });
  }

  editAndClose(id, name, thumbnailPhoto) {
    const { closeModel } = this.props;
    if (name !== '' || thumbnailPhoto !== '') {
      editBoard(id, name, thumbnailPhoto);
    }
    closeModel();
  }

  render() {
    const {
      closeModel, isOpen, id, prevName, prevThumbnail,
    } = this.props;
    const { name, thumbnailPhoto } = this.state;
    return (
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
        <Button
          title="Cancel"
          onPress={closeModel}
        />
      </Modal>

    );
  }
}
InputComponent.propTypes = {
  id: PropTypes.number.isRequired,
  prevName: PropTypes.string.isRequired,
  prevThumbnail: PropTypes.string.isRequired,
  closeModel: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default InputComponent;
