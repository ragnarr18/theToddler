import React from 'react';
import { PropTypes } from 'prop-types';
import {
  View, Text, TouchableHighlight, Image,
} from 'react-native';
import styles from './styles';
import ImageThumbnail from '../ImageThumbnail';

const icon = require('../../images/selected.png');

class BoardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false, color: 'white', show: 'none',
    };
  }

  onLongPressHandler() {
    console.log('onLongPress');
    const { id, setSelected } = this.props;
    setSelected(id);
    let { selected } = this.state;
    selected = !selected;
    this.setState({ selected });
    if (selected) {
      this.setState({ show: 'flex', color: 'none' });
      return;
    }
    this.setState({ show: 'none', color: 'white' });
  }

  render() {
    const {
      id, name, thumbnailPhoto, navigate,
    } = this.props;
    const { color, show } = this.state;
    return (
    // <View style={this.state.color} >
      <TouchableHighlight style={{ backgroundColor: color, padding: 15 }} underlayColor="#DDDDDD" key={id} onLongPress={() => (this.onLongPressHandler())} onPress={() => navigate('Lists', { boardId: id })}>
        <View>
          <View display={show}>
            <Image source={icon} style={styles.icon} />
            {/* <Text>Toggled(change to some dot)</Text> */}
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
  setSelected: PropTypes.func.isRequired,
};

export default BoardItem;
