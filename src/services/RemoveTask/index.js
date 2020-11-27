import data from '../../resources/data.json';

function RemoveTask(id) {
  data.tasks = data.tasks.filter((x) => x.id !== id);
}

export default RemoveTask;
