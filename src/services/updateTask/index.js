import data from '../../resources/data.json';

function UpdateTask(id, values) {
  console.log(id, values);
  const { name, description } = values;
  for (let i = 0; i < data.tasks.length; i += 1) {
    if (data.tasks[i].id === id) {
      data.boards[i].name = name;
      data.boards[i].description = description;
      break;
    }
  }
}

export default UpdateTask;
