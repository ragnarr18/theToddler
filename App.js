import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskItem from './src/components/Tasks';
import Boards from './src/views/Boards';
import Header from './src/components/Lists/Header';
import BottomToolbar from './src/components/Lists/BottomToolbar';
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
  const taskList = [];
  data.tasks.map((n) => (
    taskList.push(
      <View>
        <TaskItem source={n} />
        <Text>
          {n.isFinished}
          ------
        </Text>
      </View>,
    )));

  return (
    <View style={styles.container}>
      <Header />
      <Text>Open up App.js to start working on your app! testing 123</Text>
      <Text>Boardspart by raggi atm</Text>
      <Boards />
      <BottomToolbar />
    </View>
  );
}
