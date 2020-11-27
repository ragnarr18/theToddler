import data from '../../resources/data.json';

const editBoard = (id, name, thumbnailPhoto) => {
  for (let i = 0; i < data.boards.length; i += 1) {
    if (data.boards[i].id === id) {
      data.boards[i].name = name;
      data.boards[i].thumbnailPhoto = thumbnailPhoto;
      break;
    }
  }
};

export default editBoard;
