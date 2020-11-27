import React from 'react';
import PropTypes from 'prop-types';
import {
  View, FlatList,
} from 'react-native';
import styles from './styles';
import ListItem from '../ListItem';

class ListList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
          )}
          keyExtractor={(listItem) => listItem.id}
        />
      </View>
    );
  }
}

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
  setSelected: PropTypes.func.isRequired,
};

export default ListList;
