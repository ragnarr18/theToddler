import React from 'react';
import PropTypes from 'prop-types';
import {
  View, FlatList, TouchableHighlight, Text, TouchableOpacity,
} from 'react-native';
import styles from './styles';

const ListList = ({
  lists, navigation: { navigate }, onLongPress, selectedLists,
}) => (
  <View style={styles.listOverhead}>
    <FlatList
      numColumns={1}
      data={lists}
      renderItem={({ item: { id, name, color } }) => (
        <TouchableOpacity onLongPress={() => onLongPress(name)}>
          <TouchableHighlight
            key={id}
            style={{ backgroundColor: color }}
            onPress={() => navigate('Tasks', { listId: id })}
          >
            <Text style={styles.listText}>{name}</Text>
          </TouchableHighlight>
        </TouchableOpacity>
      )}
      keyExtractor={(listItem) => listItem.id}
    />
  </View>
);

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
