import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Lists/Header';
import BottomToolbar from '../../components/Lists/BottomToolbar';
import ListList from '../../components/Lists/ListList';
import data from '../../resources/data.json';

class Lists extends React.Component {
  render() {
    const listList = [];
    data.lists.filter(
      (list) => data.lists.borderId === this.props.navigation.state.params.borderId,
    ).map(
      (filteredList) => (
        listlist.push(
          <View style={{ flex: 1 }}>
            {/* arnar til að fá borderId þá geriru this.props.navigation.state.params.borderId */}
            <Text>This is where a list should appear</Text>
            <ListList lists={data.lists} navigation={this.props.navigation} />
            <BottomToolbar />
          </View>,
        )
      ),
    );

    return (
      <View style={{ flex: 1 }}>
        {/* arnar til að fá borderId þá geriru this.props.navigation.state.params.borderId */}
        <Text>This is where a list should appear</Text>
        <ListList lists={data.lists} navigation={this.props.navigation} />
        <BottomToolbar />
      </View>
    );
  }
}

export default Lists;
