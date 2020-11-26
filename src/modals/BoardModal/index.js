import { View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './styles';

// function setModalVisible(visible) {
//   this.setState({modalVisible: visible});
// }

const addModal = ({ isOpen, closeModel, children }) => {
  const [text, setText] = React.useState('');
  return (
    <Modal
      style={styles.model}
      animationType="slide"
      transparent={false}
      isVisible={isOpen}
      hasBackdrop
      swipeDirection={['up']}
      onSwipeComplete={closeModel}
      onBackdropPress={closeModel}
      onDismiss={() => {
      }}
    >
      <View style={styles.body}>
        {children}
      </View>
    </Modal>
  );
};

export default addModal;
