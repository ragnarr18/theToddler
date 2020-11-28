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
    borderBottomWidth: 1,
  },
  checkbox: {
    height: 20,
    width: 20,
    marginRight: 10,
    backgroundColor: '#ff1111',
    borderWidth: 0.5,
  },
  checkboxDone: {
    height: 20,
    width: 20,
    marginRight: 10,
    backgroundColor: '#11ff11',
    borderWidth: 0.5,
  },
  removeContainer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconText: {
    fontSize: 15,
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
    fontStyle: 'italic',
    marginBottom: 10,
    padding: 10,
  },
});
