import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Lists/Header';
import BottomToolbar from '../../components/Lists/BottomToolbar';
import ListList from '../../components/Lists/ListList';
import data from '../../resources/data.json';

class Lists extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* oi arnar til að fá borderId þá geriru this.props.navigation.state.params.borderId */}
        {console.log(this.props.navigation.state)}
        <Text>This is where a list should appear</Text>
        <ListList lists={data.lists} navigation={this.props.navigation} id={ this.props.navigation.state.params.borderId }/>
        <BottomToolbar />
      </View>
    );
  }
}

export default Lists;
