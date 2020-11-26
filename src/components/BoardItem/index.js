import React from 'react';
import { PropTypes } from 'prop-types';
import {
  View, Text, FlatList, TouchableHighlight, Alert, PanResponder
} from 'react-native';
import styles from './styles';
import ImageThumbnail from '../ImageThumbnail';

class BoardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', thumbnailPhoto: '' };
  }

  render() {
    const {
      id, name, thumbnailPhoto, navigate,
    } = this.props;

    return (
      <View style={styles.boardItem}>
        <TouchableHighlight key={id} onLongPress={() => (console.log('yes'))} onPress={() => navigate('Lists', { boardId: id })}>
          <View>
            <ImageThumbnail source={thumbnailPhoto} />
            <Text>{name}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

BoardItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnailPhoto: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default BoardItem;
