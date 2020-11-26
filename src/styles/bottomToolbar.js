import { StyleSheet } from 'react-native';
import { prettyOrange, darkerOrange } from './colors';

export default StyleSheet.create({
  toolbarAction: {
    backgroundColor: prettyOrange,
    padding: 10,
    flex: 2,
    alignItems: 'center',
    height: 40,
  },

  toolbar: {
    flexDirection: 'row',
    height: 80,
    margin: 5,
    backgroundColor: darkerOrange,
    justifyContent: 'center',
    alignItems: 'center',
  },

  toolbarActionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});
