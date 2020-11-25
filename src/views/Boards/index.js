import React from 'react';
import { View } from 'react-native';
import BoardsList from '../../components/BoardsList';
import BoardsToolbar from '../../components/BoardsToolbar';
import data from '../../resources/data.json';
import AddBoard from '../../components/AddBoard';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAddModalOpen: false };
  }

  render() {
    const { isAddModalOpen } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        <BoardsList boardsItems={data.boards} navigation={navigation} />
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
