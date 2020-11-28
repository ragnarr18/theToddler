import data from '../../resources/data.json';

function changeTaskList(id, list) {
  for (let i = 0; i < data.tasks.length; i += 1) {
    if (data.tasks[i].id === id) {
      data.tasks[i].listId = list;
      break;
    }
  }
}

export default changeTaskList;
