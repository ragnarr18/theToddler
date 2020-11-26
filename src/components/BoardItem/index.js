import React from 'react';
import { PropTypes } from 'prop-types';
import {
  View, Text, FlatList, TouchableHighlight, Alert, PanResponder, Animated,
} from 'react-native';
import styles from './styles';
import ImageThumbnail from '../ImageThumbnail';

class BoardItem extends React.Component {
  constructor(props) {
    super(props);
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.setState({ isLongPressed: true });
      },
      // onPanResponderRelease: this.onRelease.bind(this),
    });
    this.state = { name: '', thumbnailPhoto: '', color: 'red', fadeAnim: new Animated.Value(0), show:"none" };
  }

  onLongPressHandler() {
    this.setState({ show: "flex"})
  }

  _onRelease() {
    this.setState({ modalVisible: false})
  }

  render() {
    const {
      id, name, thumbnailPhoto, navigate,
    } = this.props;

    return (
      // <View style={this.state.color} >
        <TouchableHighlight style={{backgroundColor: "none"}} underlayColor="#DDDDDD" key={id} onLongPress={() => (this.onLongPressHandler())} onPress={() => navigate('Lists', { boardId: id })}>
          <View>
            <View display={this.state.show}>
              <Text>Toggled</Text>
            </View>
            <ImageThumbnail source={thumbnailPhoto} />
            <Text>{name}</Text>
          </View>
        </TouchableHighlight>
      // </View>
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
