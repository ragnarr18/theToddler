import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Lists/Header';
import BottomToolbar from '../../components/Lists/BottomToolbar';
import ListList from '../../components/Lists/ListList';
import data from '../../resources/data.json';
import AddList from '../../components/Lists/AddList';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lists: data.lists, isAddModalOpen: false };
  }

  render() {
    const { navigation } = this.props;
    const { boardId } = navigation.state.params;
    const { lists, isAddModalOpen } = this.state;
    const tempArray = lists.filter((list) => list.boardId === boardId);
    return (
      <View style={{ flex: 1 }}>
        <ListList
          lists={tempArray}
          navigation={navigation}
        />
        <BottomToolbar onAdd={() => this.setState({ isAddModalOpen: true })} />
        <AddList
          isOpen={isAddModalOpen}
          closeModel={() => this.setState({ isAddModalOpen: false })}
        />
      </View>
    );
  }
}

export default Lists;
