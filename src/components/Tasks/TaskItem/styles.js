import { StyleSheet } from 'react-native';
import { lightGray, darkGray } from '../../../styles/colors';

export default StyleSheet.create({
  TaskContainer: {
    marginTop: 10,
    paddingTop: 10,
    backgroundColor: '#ffa',
  },
  TaskItem: {
    backgroundColor: '#faa',
  },
  container: {
    backgroundColor: '#aaaaaa',
    borderColor: '#111111',
    borderWidth: 1,
  },
  view: {
    height: 50,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  collapseView: {
    padding: 20,
  },
  iconView: {
    height: 50,
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
  },
  checkbox: {
    height: 20,
    width: 20,
    marginRight: 10,
    backgroundColor: '#ff1111',
  },
  checkboxDone: {
    height: 20,
    width: 20,
    marginRight: 10,
    backgroundColor: '#11ff11',
  },
  removeContainer: {
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  arrow: {
    width: 15,
    height: 15,
    position: 'absolute',
    right: 20,
    opacity: 0.3,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    backgroundColor: lightGray,
    marginBottom: 10,
  },
});
