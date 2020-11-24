import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Lists/Header';
import BottomToolbar from '../../components/Lists/BottomToolbar';
import ListList from '../../components/Lists/ListList';
import data from '../../resources/data.json';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lists: data.lists };
  }

  render() {
    const { navigation } = this.props;
    const { boardId } = navigation.state.params;
    const { lists } = this.state;
    const tempArray = lists.filter((list) => list.boardId === boardId);
    return (
      <View style={{ flex: 1 }}>
        <Text>This is where a list should appear</Text>
        <ListList
          lists={tempArray}
          navigation={navigation}
        />
        <BottomToolbar />
      </View>
    );
  }
}

export default Lists;
