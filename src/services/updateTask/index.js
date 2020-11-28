import data from '../../resources/data.json';

function UpdateTask(id, newName, newDescription, finished) {
  for (let i = 0; i < data.tasks.length; i += 1) {
    if (data.tasks[i].id === id) {
      data.tasks[i].name = newName;
      data.tasks[i].description = newDescription;
      data.tasks[i].isFinished = finished;
      break;
    }
  }
}

export default UpdateTask;
