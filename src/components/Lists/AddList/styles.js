import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  model: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 2,
    margin: 15,
    width: 200,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  inputDropdown: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    padding: 2,
    margin: 5,
    width: 200,
    position: 'relative',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  smallFont: {
    fontSize: 13,
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 5,
    zIndex: 0,
  },
});
