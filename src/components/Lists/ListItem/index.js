import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Text, TouchableOpacity, TouchableHighlight,
} from 'react-native';
import styles from './styles';

// const icon = require('../../../images/selected.png');

class BoardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false, color: this.props.color, show: 'none', originalColor: this.props.color,
    };
  }

  onLongPressHandler(color) {
    // console.log('onLongPress');
    const { id, setSelected } = this.props;
    setSelected(id);
    let { selected, originalColor } = this.state;
    selected = !selected;
    this.setState({ selected });
    if (selected) {
      this.setState({ show: 'flex', color: 'none' });
      return;
    }
    this.setState({ show: 'none', color: originalColor });
  }

  render() {
    const {
      id, name, navigate,
    } = this.props;
    const { color, show } = this.state;
    return (
    // <View style={this.state.color} >
      <TouchableOpacity>
        <TouchableHighlight
          key={id}
          underlayColor="#DDDDDD"
          style={{ backgroundColor: color, borderBottomWidth: 1 }}
          onLongPress={() => (this.onLongPressHandler())}
          onPress={() => navigate('Tasks', { listId: id })}
        >
          <Text style={styles.listText}>{name}</Text>
        </TouchableHighlight>
      </TouchableOpacity>
    // </View>
    );
  }
}

BoardItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default BoardItem;
