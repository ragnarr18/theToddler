import { StyleSheet } from 'react-native';
import { prettyOrange } from '../../../styles/colors';

export default StyleSheet.create({
  toolbarAction: {
    backgroundColor: prettyOrange,
    padding: 10,
    flex: 2,
    alignItems: 'center',
  },

  toolbar: {
    flexDirection: 'row',
    height: 80,
    margin: 5,
    backgroundColor: prettyOrange,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
