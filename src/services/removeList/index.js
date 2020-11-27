import data from '../../resources/data.json';

function removeList(id) {
  data.lists = data.lists.filter((x) => x.id !== id);
}

export default removeList;
