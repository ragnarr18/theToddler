import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Lists/Header';
import BottomToolbar from '../../components/Lists/BottomToolbar';

class Lists extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        {console.log(props.ListItem)}
        <Text>This is where a list should appear</Text>
        <BottomToolbar />
      </View>
    );
  }
}

export default Lists;
