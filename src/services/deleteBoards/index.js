import data from '../../resources/data.json';
import deleteTasks from '../deleteTasks';

const deleteLists = (boardId) => {
  for (let i = 0; i < data.lists.length; i += 1) {
    if (data.lists[i].boardId === boardId) {
      deleteTasks(data.lists[i].id);
    }
  }
  data.lists = data.lists.filter((l) => l.boardId !== boardId);
};

const deleteBoards = (boardIdArray) => {
  for (let i = 0; i < boardIdArray.length; i += 1) {
    data.boards = data.boards.filter((b) => b.id !== boardIdArray[i]);
    deleteLists(boardIdArray[i]);
  }
};

export default deleteBoards;
