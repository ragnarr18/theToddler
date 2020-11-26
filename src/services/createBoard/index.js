import data from '../../resources/data.json';

const createBoard = (name, thumbnailPhoto) => {
  const id = data.boards.length + 1;
  const board = { id, name, thumbnailPhoto };
  data.boards.push(board);
};

export default createBoard;
