import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

const Toolbar = ({ goBack }) => (
  <View stylename="horizontal">
    <TouchableHighlight onPress={goBack}>
      <Text>Return</Text>
    </TouchableHighlight>
    <Text> Default List </Text>
  </View>
);

export default Toolbar;