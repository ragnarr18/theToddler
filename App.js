import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskItem from './src/components/Tasks';
import Boards from './src/views/Boards';
import data from './src/resources/data.json';

import Navigator from './src/routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const taskList = [];
  data.tasks.map((n) => (
    taskList.push(
      <View>
        <TaskItem item={n} />
        <Text>
          ------
        </Text>
      </View>,
    )));

  return (
    <View style={styles.container}>
      { taskList }
      <Text>Boardspart by raggi atm</Text>
      <Boards />
    </View>
  );
}
