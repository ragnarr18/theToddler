import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidht } = Dimensions.get('window');

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
    flexGrow: 0.3,
    borderRadius: 10,
    width: winWidht - 100,
    backgroundColor: 'blue',
    paddingVertical: 40,
  },
});
