import React from 'react';
import { View } from 'react-native';
import BoardsList from '../../components/BoardsList';
import BoardsToolbar from '../../components/BoardsToolbar';
import data from '../../resources/data.json';
import AddBoard from '../../components/AddBoard';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <View>
        <AddBoard />
        <BoardsList boardsItems={data.boards} navigation={this.props.navigation} />
        <BoardsToolbar />
      </View>
    );
  }
}
export default Boards;
