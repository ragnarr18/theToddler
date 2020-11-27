import React from 'react';
import { View } from 'react-native';
/* import Header from '../../components/Lists/Header'; */
import BottomToolbar from '../../components/Lists/BottomToolbar';
import ListList from '../../components/Lists/ListList';
import data from '../../resources/data.json';
import AddList from '../../components/Lists/AddList';
import deleteLists from '../../services/deleteBoards';

const icon = require('../../images/selected.png');

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: data.lists,
      isAddModalOpen: false,
      selectedItems: [],
      show: 'none',
      isRemoveModalOpen: false,
    };
  }

  selectOrUnSelect(id) {
    const { selectedItems } = this.state;
    const index = selectedItems.indexOf(id);
    if (index === -1) {
      selectedItems.push(id);
      console.log(selectedItems);
      return;
    }
    selectedItems.splice(index, 1);
  }

  deleteSelected() {
    const { selectedItems } = this.state;
    deleteLists(selectedItems);
    this.setState({ selectedItems: [] });
  }

  render() {
    const { navigation } = this.props;
    const { boardId } = navigation.state.params;
    const {
      lists, isAddModalOpen, isRemoveModalOpen, selectedLists,
    } = this.state;
    const tempArray = lists.filter((list) => list.boardId === boardId);
    return (
      <View style={{ flex: 1 }}>
        <ListList
          lists={tempArray}
          navigation={navigation}
          setSelected={(id) => this.selectOrUnSelect(id)}
        />
        <BottomToolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onRemove={() => this.deleteSelected()}
        />
        <AddList
          isOpen={isAddModalOpen}
          closeModel={() => this.setState({ isAddModalOpen: false })}
          boardId={navigation.state.params.boardId}
        />
      </View>
    );
  }
}

export default Lists;
