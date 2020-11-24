import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskItem from './src/components/Tasks';
import Boards from './src/views/Boards';
import Header from './src/components/Lists/Header';
import BottomToolbar from './src/components/Lists/BottomToolbar';
import data from './src/resources/data.json';
import 'react-native-gesture-handler';
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
  return (
    <Navigator />
  );
}
