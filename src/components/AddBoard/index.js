import React from 'react';
import { PropTypes } from 'prop-types';
import {
  View, TextInput, Text, Button,
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

  createAndClose(name, thumbnailPhoto) {
    const { closeModel } = this.props;
    if (name !== '' || thumbnailPhoto !== '') {
      createBoard(name, thumbnailPhoto);
    }
    closeModel();
  }

  render() {
    const { closeModel, isOpen } = this.props;
    const { name, thumbnailPhoto } = this.state;
    return (
      <Modal
        closeModel={closeModel}
        isOpen={isOpen}
      >
        <Text style={styles.title}> Create Board </Text>
        <Text style={styles.sectionText}>Name:</Text>
        <TextInput
          placeholder="Paris summer 2018"
          value={name}
          onChangeText={(text) => this.updateName(text)}
          style={styles.input}
        />

        <Text style={styles.sectionText}>URL to thumbnail:</Text>
        <TextInput
          placeholder="e.g. tom-jerry-1.jpg"
          multiline
          value={thumbnailPhoto}
          onChangeText={(text) => this.updateThumbnail(text)}
          style={styles.input}
        />
        <View style={styles.button}>
          <Button
            title="Create Board"
            onPress={() => this.createAndClose(name, thumbnailPhoto)}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Cancel"
            color="#bbbbbb"
            onPress={closeModel}
          />
        </View>
      </Modal>
    );
  }
}

InputComponent.propTypes = {
  closeModel: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default InputComponent;
