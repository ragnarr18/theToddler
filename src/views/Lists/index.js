import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import BottomToolbar from '../../components/Lists/BottomToolbar';
import ListList from '../../components/Lists/ListList';
import data from '../../resources/data.json';
import AddList from '../../components/Lists/AddList';
import EditList from '../../components/Lists/EditList';
import deleteList from '../../services/removeList';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddModalOpen: false,
      selectedItems: [],
      isEditModalOpen: false,
      currentName: '',
      currentColor: '',
    };
  }

  getNameAndColor(id) {
    let list = null;
    for (let i = 0; i < data.lists.length; i += 1) {
      if (data.lists[i].id === id) {
        list = data.lists[i];
        this.setState({
          currentName: list.name,
          currentColor: list.color,
        });
        break;
      }
    }
  }

  selectOrUnSelect(id) {
    const { selectedItems } = this.state;
    const index = selectedItems.indexOf(id);
    if (index === -1) {
      selectedItems.push(id);
      this.getNameAndColor(id);
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
  }

  render() {
    const { navigation } = this.props;
    // const { state } = navigation;
    // const { params } = state;
    const { boardId } = navigation.state.params;
    const {
      isAddModalOpen, isEditModalOpen, selectedItems, currentName, currentColor,
    } = this.state;
    const tempArray = data.lists.filter((list) => list.boardId === boardId);
    return (
      <View style={{ flex: 1 }}>
        <ListList
          lists={tempArray}
          navigation={navigation}
          setSelected={(id) => this.selectOrUnSelect(id)}
        />
        <BottomToolbar
          onAdd={() => this.setState({ isAddModalOpen: true, selectedItems })}
          onRemove={() => this.deleteSelected()}
          onEdit={() => this.setState({ isEditModalOpen: true, selectedItems })}
        />
        <AddList
          isOpen={isAddModalOpen}
          closeModel={() => this.setState({ isAddModalOpen: false })}
          boardId={boardId}
        />
        {selectedItems.length === 1
        && (
        <EditList
          isOpen={isEditModalOpen}
          closeModel={() => this.setState({ isEditModalOpen: false })}
          id={selectedItems[0]}
          prevName={currentName}
          prevColor={currentColor}
        />
        )}

      </View>
    );
  }
}

Lists.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        boardId: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default Lists;
