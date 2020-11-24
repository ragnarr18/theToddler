import React from 'react';
import { View } from 'react-native';
import BoardsList from '../../components/BoardsList';
import BoardsToolbar from '../../components/BoardsToolbar';
import data from '../../resources/data.json';

class Boards extends React.Component {
  render() {
    return (
      <View>
        {console.log(this.props)}
        <BoardsList boardsItems={data.boards} navigation={this.props.navigation} />
        <BoardsToolbar />
      </View>
    );
  }
}
export default Boards;
