import data from '../../resources/data.json';

const deleteLists = (id) => {
  data.lists = data.lists.filter((l) => l.id !== id);
};

export default deleteLists;
