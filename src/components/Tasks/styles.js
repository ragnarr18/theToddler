import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  TaskContainer: {
    marginTop: 10,
    paddingTop: 10,
    backgroundColor: '#ffa',
  },
  TaskItem: {
    backgroundColor: 'aaa',
  },
  container: {
    flex: 1,
    width: 400,
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
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between left',
    backgroundColor: '#ffffff',
  },
  checkbox: {
    height: 20,
    width: 20,
    marginRight: 10,
    backgroundColor: '#ff1111'
  },
  checkboxDone: {
    height: 20,
    width: 20,
    marginRight: 10,
    backgroundColor: '#11ff11'
  }
});
