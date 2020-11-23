import React from 'react';
import { View } from 'react-native';
import BoardsList from '../../components/BoardsList';
import BoardsToolbar from '../../components/BoardsToolbar';

class Boards extends React.Component {
  render() {
    return (
      <View>
        <BoardsList />
        <BoardsToolbar />
      </View>
    );
  }
}
export default Boards;
