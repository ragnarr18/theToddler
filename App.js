import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Boards from './src/components/Boards';
import { TaskItem } from './src/components/Tasks';
import Boards from './src/views/Boards';
import data from './src/resources/data.json';

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
      { data.tasks.forEach((item) => {
        console.log(item.name);
          <TaskItem props={item} />;
      })}
      <Text>Open up App.js to start working on your app! testing 123</Text>
      <Text>Boardspart by raggi atm</Text>
      <Boards />
    </View>
  );
}
