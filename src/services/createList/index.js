import data from '../../resources/data.json';

const createList = (name, color, boardId) => {
  const id = data.lists.length + 1;
  const list = {
    boardId, color, id, name,
  };
  data.lists.push(list);
  console.log(list);
};

export default createList;
