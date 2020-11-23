import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Boards from './src/views/Boards';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Boards />
      <Text>Open up App.js to start working on your app! testing 123</Text>
    </View>
  );
}
