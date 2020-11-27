import React from 'react';
import { View } from 'react-native';
/* import Header from '../../components/Lists/Header'; */
import BottomToolbar from '../../components/Lists/BottomToolbar';
import ListList from '../../components/Lists/ListList';
import data from '../../resources/data.json';
import AddList from '../../components/Lists/AddList';

const icon = require('../../images/selected.png');

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: data.lists, isAddModalOpen: false, selected: false, show: 'none'
};
  }

  onLongPressHandler() {
    console.log('onLongPress');
    const { id, setSelected } = this.props;
    setSelected(id);
    let { selected } = this.state;
    selected = !selected;
    this.setState({ selected });
    if (selected) {
      this.setState({ show: 'flex', color: 'none' });
      return;
    }
    this.setState({ show: 'none', color: 'white' });
  }

  render() {
    const { navigation } = this.props;
    const { boardId } = navigation.state.params;
    const { lists, isAddModalOpen, selectedLists } = this.state;
    const tempArray = lists.filter((list) => list.boardId === boardId);
    return (
      <View style={{ flex: 1 }}>
        <ListList
          lists={tempArray}
          navigation={navigation}
          onLongPress={() => (this.onLongPressHandler())}
          selectedLists={selectedLists}
        />
        <BottomToolbar onAdd={() => this.setState({ isAddModalOpen: true })} />
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
