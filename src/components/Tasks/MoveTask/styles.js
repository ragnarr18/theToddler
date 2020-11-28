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
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 20,
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
});
