import React from 'react';
import { View } from 'react-native';
/* import Header from '../../components/Lists/Header'; */
import BottomToolbar from '../../components/Lists/BottomToolbar';
import ListList from '../../components/Lists/ListList';
import data from '../../resources/data.json';
import AddList from '../../components/Lists/AddList';
import deleteList from '../../services/removeList';

const icon = require('../../images/selected.png');

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: data.lists,
      isAddModalOpen: false,
      selectedItems: [],
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
    for (let i = 0; i < selectedItems.length; i += 1) {
      deleteList(selectedItems[i]);
    }
    this.setState({ selectedItems: [] });
    console.log("setState");
    console.log(this.state.selectedItems);

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
          boardId={boardId}
        />
      </View>
    );
  }
}

export default Lists;
