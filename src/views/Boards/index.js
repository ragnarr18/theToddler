import React from 'react';
import { View } from 'react-native';
import BoardsList from '../../components/BoardsList';
import BoardsToolbar from '../../components/BoardsToolbar';
import data from '../../resources/data.json';
import AddBoard from '../../components/AddBoard';
import EditBoard from '../../components/EditBoard';
import deleteBoards from '../../services/deleteBoards';
import editBoard from '../../services/editBoard';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      isAddModalOpen: false, isEditModalOpen: false, selectedItems: [], currentName: '', currentThumbnail: '',
    };
  }

  getNameAndThumbnail(id) {
    let board = null;
    for (let i = 0; i < data.boards.length; i += 1) {
      if (data.boards[i].id === id) {
        board = data.boards[i];
        this.setState({ currentName: board.name, currentThumbnail: board.thumbnailPhoto });
        break;
      }
    }
=======
      isAddModalOpen: false,
      selectedItems: [],
    };
>>>>>>> c73e8c7bc355da4ec3dfacb6c5de225231a976c8
  }

  selectOrUnSelect(id) {
    const { selectedItems } = this.state;
    const index = selectedItems.indexOf(id);
    if (index === -1) {
      selectedItems.push(id);
      this.getNameAndThumbnail(id);
      console.log(selectedItems);
      return;
    }
    selectedItems.splice(index, 1);
  }

  deleteSelected() {
    const { selectedItems } = this.state;
    deleteBoards(selectedItems);
    this.setState({ selectedItems: [] });
  }

  // editSelected(id) {
  //   const { closeModel } = this.props;
  //   if (name !== '' || thumbnailPhoto !== '') {
  //     editBoard(id, name, thumbnailPhoto);
  //   }
  // }

  render() {
    const {
      isAddModalOpen, isEditModalOpen, currentName, currentThumbnail,
    } = this.state;
    const { navigation } = this.props;
    const { selectedItems } = this.state;
    return (
      <View>
        <BoardsList
          boardsItems={data.boards}
          navigation={navigation}
          setSelected={(id) => this.selectOrUnSelect(id)}
        />
        <BoardsToolbar
<<<<<<< HEAD
          onAdd={() => this.setState({ isAddModalOpen: true, selectedItems })}
          onDelete={() => this.deleteSelected()}
          onEdit={() => this.setState({ isEditModalOpen: true, selectedItems })}
=======
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onDelete={() => this.deleteSelected()}
>>>>>>> c73e8c7bc355da4ec3dfacb6c5de225231a976c8
        />
        <AddBoard
          isOpen={isAddModalOpen}
          closeModel={() => this.setState({ isAddModalOpen: false })}
        />
        {selectedItems.length === 1
        && (
        // this.getNameAndThumbnail(selectedItems[0]),
        <EditBoard
          isOpen={isEditModalOpen}
          closeModel={() => this.setState({ isEditModalOpen: false })}
          id={selectedItems[0]}
          prevName={currentName}
          prevThumbnail={currentThumbnail}
        />
        )}
      </View>
    );
  }
}
export default Boards;
