import React from 'react';
import PropTypes from 'prop-types';
import {
  View, FlatList, TouchableHighlight, Text, TouchableOpacity,
} from 'react-native';
import styles from './styles';
import ListItem from '../ListItem';

class ListList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // selected: false,
      // color: 'white',
      // show: 'none',
    };
  }

  // onLongPressHandler() {
  //   console.log('onLongPress');
  //   const { id, setSelected } = this.props;
  //   setSelected(id);
  //   let { selected } = this.state;
  //   selected = !selected;
  //   this.setState({ selected });
  //   if (selected) {
  //     this.setState({ show: 'flex', color: 'none' });
  //     return;
  //   }
  //   this.setState({ show: 'none', color: 'white' });
  // }

  render() {
    const { lists, navigation, setSelected } = this.props;
    const { navigate } = navigation;
    return (
      <View style={styles.listOverhead}>
        <FlatList
          numColumns={1}
          data={lists}
          renderItem={({ item: { id, name, color } }) => (
            <ListItem
              id={id}
              name={name}
              color={color}
              setSelected={setSelected}
              navigate={navigate}
            />
            // <TouchableOpacity>
            //   <TouchableHighlight
            //     key={id}
            //     style={{ backgroundColor: color }}
            //     onLongPress={() => (this.onLongPressHandler())}
            //     onPress={() => navigate('Tasks', { listId: id })}
            //   >
            //     <Text style={styles.listText}>{name}</Text>
            //   </TouchableHighlight>
            // </TouchableOpacity>
          )}
          keyExtractor={(listItem) => listItem.id}
        />
      </View>
    );
  }
}

// const ListList = ({
//   lists, navigation: { navigate }, onLongPress, selectedLists,
// }) => (
//   <View style={styles.listOverhead}>
//     <FlatList
//       numColumns={1}
//       data={lists}
//       renderItem={({ item: { id, name, color } }) => (
//         <TouchableOpacity onLongPress={() => onLongPress(name)}>
//           <TouchableHighlight
//             key={id}
//             style={{ backgroundColor: color }}
//             onPress={() => navigate('Tasks', { listId: id })}
//           >
//             <Text style={styles.listText}>{name}</Text>
//           </TouchableHighlight>
//         </TouchableOpacity>
//       )}
//       keyExtractor={(listItem) => listItem.id}
//     />
//   </View>
// );

ListList.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    boardId: PropTypes.number.isRequired,
  })).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ListList;
