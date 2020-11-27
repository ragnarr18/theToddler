import { StyleSheet, Dimensions } from 'react-native';
import { prettyOrange, darkerOrange } from './colors';

const WIDTH = Math.round(Dimensions.get('window').width);
export default StyleSheet.create({
  toolbarContainer: {
    position: 'absolute',
    bottom: 0,
    width: WIDTH,
  },
  toolbar: {
    flexDirection: 'row',
    height: 80,
    margin: 5,
    backgroundColor: darkerOrange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbarAction: {
    backgroundColor: prettyOrange,
    padding: 10,
    flex: 2,
    alignItems: 'center',
    height: 40,
  },
  toolbarActionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
});
