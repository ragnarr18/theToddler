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
    margin: 5,
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
    fontSize: 30,
    marginBottom: 10,
  },
  smallFont: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  button: {
    margin: 5,
    zIndex: 0,
  },
});
