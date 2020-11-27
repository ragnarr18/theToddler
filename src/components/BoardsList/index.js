import React from 'react';
import { PropTypes } from 'prop-types';
import {
  View, FlatList,
} from 'react-native';
import styles from './styles';
import BoardItem from '../BoardItem';

class BoardsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { boardsItems, navigation, setSelected } = this.props;
    return (
      <View styleName="horizontal" style={styles.container}>
        <FlatList
          numColumns={2}
          data={boardsItems}
          renderItem={({ item }) => (
            <BoardItem
              navigate={navigation.navigate}
              id={item.id}
              name={item.name}
              thumbnailPhoto={item.thumbnailPhoto}
              setSelected={setSelected}
            />
          )}
          keyExtractor={(boardsItem) => boardsItem.id}
        />
      </View>
    );
  }
}

// export default InputComponent;

// const BoardsList = ({ boardsItems, navigation: { navigate } }) => (
//   <View styleName="horizontal" style={styles.container}>
//     <FlatList
//       numColumns={2}
//       data={boardsItems}
//       renderItem={({ item }) => (
//         <View style={styles.boarderItem}>
//           <Text> item </Text>
//           <TouchableHighlight
//              key={item.id}
//              onLongPress={() => (console.log("yes"))}
//              onPress={() => navigate('Lists', { boardId: item.id })}>
//             <View>
//               <ImageThumbnail source={item.thumbnailPhoto} />
//               <Text>{item.name}</Text>
//             </View>
//           </TouchableHighlight>
//         </View>
//       )}
//       keyExtractor={(boardsItem) => boardsItem.name}
//     />
//   </View>
// );

BoardsList.propTypes = {
  boardsItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnailPhoto: PropTypes.string.isRequired,
  })).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default BoardsList;
