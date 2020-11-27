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
    margin: 5,
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
    fontSize: 14,
    marginBottom: 20,
  },
  smallFont: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
  },
});
