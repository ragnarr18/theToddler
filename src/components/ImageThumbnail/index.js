import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import styles from './styles';

const ImageThumbnail = ({ source }) => (
  <Image
    style={styles.image}
    resizeMode="cover"
    source={{ uri: source }}
  />
);

export default ImageThumbnail;
