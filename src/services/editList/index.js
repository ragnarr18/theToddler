import data from '../../resources/data.json';

const editList = (id, name, color) => {
  for (let i = 0; i < data.lists.length; i += 1) {
    // console.log(data.lists[i])
    if (data.lists[i].id === id) {
      // console.log(data.lists[i].id)
      data.lists[i].name = name;
      data.lists[i].color = color;
      break;
    }
    // console.log("here", id);
    // console.log("here", name);
    // console.log("here", color);

  }
};

export default editList;
