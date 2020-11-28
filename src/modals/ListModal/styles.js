import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');
const { height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  model: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0.5,
    borderRadius: 10,
    width: winWidth - 100,
    height: winHeight - 500,
    backgroundColor: 'white',
    padding: 40,
  },
  smallFont: {
    fontSize: 4,
    fontStyle: 'italic',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
