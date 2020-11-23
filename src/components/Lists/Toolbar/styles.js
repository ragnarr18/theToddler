import { StyleSheet } from 'react-native';
import { prettyOrange } from '../../../styles/colors';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: prettyOrange,
  },
});