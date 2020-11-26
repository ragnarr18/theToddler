import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import Modal from 'react-native-modal';

// function setModalVisible(visible) {
//   this.setState({modalVisible: visible});
// }

const addModal = ({ isOpen, closeModel }) => (
  <View style={{ marginTop: 22 }}>
    <Modal
      animationType="slide"
      transparent={false}
      visible={isOpen}
      hasBackdrop
      onDismiss={() => {
      }}
    >
      <View style={{ marginTop: 22 }}>
        <View>
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
