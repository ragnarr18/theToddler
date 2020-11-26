import React from 'react';
import { View } from 'react-native';
/* import Header from '../../components/Lists/Header'; */
import BottomToolbar from '../../components/Lists/BottomToolbar';
import ListList from '../../components/Lists/ListList';
import data from '../../resources/data.json';
import AddList from '../../components/Lists/AddList';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lists: data.lists, isAddModalOpen: false, selectedLists: [] };
  }

  onListLongPress(name) {
    const { selectedLists } = this.state;
    if (selectedLists.indexOf(name) !== -1) {
      // The list is already within the list
      this.setState({
        selectedLists: selectedLists.filter((list) => list !== name),
      });
    } else {
      // The list needs to be added
      this.setState({
        selectedLists: [...selectedLists, name],
      });
    }
  }

  render() {
    console.log(this.state.selectedLists);
    const { navigation } = this.props;
    const { boardId } = navigation.state.params;
    const { lists, isAddModalOpen, selectedLists } = this.state;
    const tempArray = lists.filter((list) => list.boardId === boardId);
    return (
      <View style={{ flex: 1 }}>
        <ListList
          lists={tempArray}
          navigation={navigation}
          onLongPress={(name) => this.onListLongPress(name)}
          selectedLists={selectedLists}
        />
        <BottomToolbar onAdd={() => this.setState({ isAddModalOpen: true })} />
        <AddList
          isOpen={isAddModalOpen}
          closeModel={() => this.setState({ isAddModalOpen: false })}
          boardId={navigation.state.params}
        />
      </View>
    );
  }
}

export default Lists;
