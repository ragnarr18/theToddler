import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Header = ({ goBack }) => (
  <View stylename="horizontal" styles={styles.header}>
    <TouchableHighlight onPress={goBack} styles={styles.headerAction}>
      <Text>Return</Text>
    </TouchableHighlight>
    <Text>Default List</Text>
  </View>
);

export default Header;
