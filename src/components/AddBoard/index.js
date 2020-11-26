import { Text, View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './styles';

// function setModalVisible(visible) {
//   this.setState({modalVisible: visible});
// }

const addModal = ({ isOpen, closeModel }) => (
  <View style={styles.model}>
    <Modal
      animationType="slide"
      transparent={false}
      visible={isOpen}
      hasBackdrop
      onDismiss={() => {
      }}
    >
      <View style={styles.body}>
        <View>
          {console.log('modal isOpen: ', isOpen)}
          <Text>Hello World!</Text>

          {/* <TouchableHighlight
                onPress={() => {
                  {closeModel}
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight> */}
        </View>
      </View>
    </Modal>

    {/* <TouchableHighlight
          onPress={() => {

          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight> */}
  </View>
);

export default addModal;
