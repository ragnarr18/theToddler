import React from 'react';
import { PropTypes } from 'prop-types';
import {
  View, Text, FlatList, TouchableHighlight,
} from 'react-native';
import styles from './styles';
import ImageThumbnail from '../ImageThumbnail';

const BoardsList = ({ boardsItems, navigation: { navigate } }) => (
  <View styleName="horizontal" style={styles.container}>
    <FlatList
      numColumns={2}
      data={boardsItems}
      renderItem={({ item }) => (
        <View style={styles.boarderItem}>
          <Text> item </Text>
          <TouchableHighlight key={item.id} onPress={() => navigate('Lists', { boardId: item.id })}>
            <View>
              <ImageThumbnail source={item.thumbnailPhoto} />
              <Text>{item.name}</Text>
            </View>
          </TouchableHighlight>
        </View>
      )}
      keyExtractor={(boardsItem) => boardsItem.name}
    />
  </View>
);

BoardsList.propTypes = {
  boardsItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnailPhoto: PropTypes.string.isRequired,
  })).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default BoardsList;
