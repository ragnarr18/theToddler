import React from 'react';
import { View } from 'react-native';
import BoardsList from '../../components/BoardsList';
import BoardsToolbar from '../../components/BoardsToolbar';
import data from '../../resources/data.json';
import AddBoard from '../../components/AddBoard';

class Boards extends React.Component {
  state = {
    selectedLists: []
  }
  onImageLongPress(name) {
    const { selectedLists } = this.state;
    if (selectedLists.indexOf(name) !== -1) {
      // The list is already within the list
      this.setState({
        selectedLists: selectedLists.filter(lists => lists !== name)
      });
    } else {
      // The list needs to be added
      this.setState({
        selectedLists: [ ...selectedLists, name ]
      });
    }
  }
  constructor(props) {
    super(props);
    this.state = { isAddModalOpen: false };
  }

  render() {
    console.log(this.state.selectedLists);
    const { isAddModalOpen } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        <BoardsList boardsItems={data.boards} navigation={navigation} onLongPress={(name) => this.onImageLongPress()}/>
        <BoardsToolbar onAdd={() => this.setState({ isAddModalOpen: true })} />
        <AddBoard
          isOpen={isAddModalOpen}
          closeModel={() => this.setState({ isAddModalOpen: false })}
        />
      </View>
    );
  }
}
export default Boards;
