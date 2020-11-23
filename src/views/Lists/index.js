import React from 'react';
import { View, Text, Image } from 'react-native';
import Toolbar from '../../components/Lists/Toolbar';

class List extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Toolbar />
      </View>
    );
  }
}
