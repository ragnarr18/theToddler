import React from 'react';
import { PropTypes } from 'prop-types';
import {
  View, Image, TouchableHighlight,
} from 'react-native';
import styles from './style';

function PureClickableIcon({ iconSource, iconFunction }) {
  return (
    <View>
      <TouchableHighlight onPress={iconFunction}>
        <Image style={styles.icon} source={iconSource} />
      </TouchableHighlight>
    </View>
  );
}

PureClickableIcon.propTypes = {
  iconSource: PropTypes.string.isRequired,
  iconFunction: PropTypes.func.isRequired,
};

const ClickableIcon = React.memo(PureClickableIcon);
export default ClickableIcon;
