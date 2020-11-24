import { StyleSheet } from 'react-native';
import { prettyOrange } from '../../../styles/colors';

export default StyleSheet.create({
  headerAction: {
    backgroundColor: prettyOrange,
    padding: 10,
    flex: 2,
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    height: 80,
    margin: 5,
    backgroundColor: prettyOrange,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
