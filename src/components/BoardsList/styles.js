import { StyleSheet, Dimensions } from 'react-native';

const HEIGHT = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: HEIGHT - 175,
  },

  boarderItem: {
    margin: 10,
  },

  boardItemLongPress: {
    backgroundColor: 'red',
  },
});

export default styles;
