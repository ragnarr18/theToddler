import data from '../../resources/data.json';

const deleteBoards = (boardIdArray) => {
  for (let i = 0; i < boardIdArray.length; i++) {
    data.boards = data.boards.filter((b) => b.id !== boardIdArray[i])
  }
};

export default deleteBoards;
