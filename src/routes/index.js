import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Boards from '../views/Boards';
import Lists from '../views/Lists';
import Tasks from '../views/Tasks/Task';
import TaskDetails from '../views/Tasks/TaskDetails';

const StackNavigator = createStackNavigator({
  Boards,
  Lists,
  Tasks,
  TaskDetails,
});

export default createAppContainer(StackNavigator);
