import data from '../../resources/data.json';

const editList = (id, name, color) => {
  for (let i = 0; i < data.lists.length; i += 1) {
    if (data.lists[i].id === id) {
      data.lists[i].name = name;
      data.lists[i].color = color;
      break;
    }
  }
};

export default editList;
