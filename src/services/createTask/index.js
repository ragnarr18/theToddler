import data from '../../resources/data.json';

function getHighest() {
  function getIds() {
    return data.tasks.map((x) => x.id);
  }
  return Math.max(...getIds());
}

const createTask = (taskName, taskDescription, newListId) => {
  const newId = getHighest() + 1;
  const task = {
    id: newId,
    name: taskName,
    description: taskDescription,
    isFinished: false,
    listId: newListId,
  };
  data.tasks.push(task);
};

export default createTask;
