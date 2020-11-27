import data from '../../resources/data.json';

const deleteTasks = (listId) => {
  data.tasks = data.tasks.filter((t) => t.listId !== listId);
};

export default deleteTasks;
