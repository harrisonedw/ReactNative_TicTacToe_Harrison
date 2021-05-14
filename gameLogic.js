export const defaultBoard = () => {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
};

export const checkForWinner = (game, lastX, lastY, callback) => {
  let val = game[lastY][lastX];
   leftCheck(val, game, lastX, lastY, 1, callback);
   rightCheck(val, game, lastX, lastY, 1, callback);
   upCheck(val, game, lastX, lastY, 1, callback);
   downCheck(val, game, lastX, lastY, 1, callback);
   diagUpRightCheck(val, game, lastX, lastY, 1, callback);
   diagUpLeftCheck(val, game, lastX, lastY, 1, callback);
   diagDownRightCheck(val, game, lastX, lastY, 1, callback);
   diagDownLeftCheck(val, game, lastX, lastY, 1, callback);
};

const leftCheck = (val, game, x, y, count, callback) => {  
  if (count === 3) {
    callback(val);
    return;
  }
  if (game[y][x - 1] === val) leftCheck(val, game, x - 1, y, count + 1, callback);
  return;
};

const rightCheck = (val, game, x, y, count, callback) => {
  if (count === 3) {
    callback(val);
    return;
  }
  if (game[y][x + 1] === val) rightCheck(val, game, x + 1, y, count + 1, callback);
  return;
};

const upCheck = (val, game, x, y, count, callback) => {
  if (count === 3) {
    callback(val);
    return;
  }
  if (game[y - 1] && game[y - 1][x] === val) upCheck(val, game, x, y - 1, count + 1, callback);
  return;
};

const downCheck = (val, game, x, y, count, callback) => {
  if (count === 3) {
    callback(val);
    return;
  }
  if (game[y + 1] && game[y + 1][x] === val) downCheck(val, game, x, y + 1, count + 1, callback);
  return;
};

const diagUpRightCheck = (val, game, x, y, count, callback) => {
  if (count === 3) {
    callback(val);
    return;
  }
  if (game[y - 1] && game[y - 1][x + 1] === val) diagUpRightCheck(val, game, x + 1, y - 1, count + 1, callback);
  return;
};

const diagUpLeftCheck = (val, game, x, y, count, callback) => {
  if (count === 3) {
    callback(val);
    return;
  }
  if (game[y - 1] && game[y - 1][x - 1] === val) diagUpLeftCheck(val, game, x - 1, y - 1, count + 1, callback);
  return;
};

const diagDownLeftCheck = (val, game, x, y, count, callback) => {
  if (count === 3) {
    callback(val);
    return;
  }
  if (game[y + 1] && game[y + 1][x - 1] === val) diagDownLeftCheck(val, game, x - 1, y + 1, count + 1, callback);
  return;
};

const diagDownRightCheck = (val, game, x, y, count, callback) => {
  if (count === 3) {
    callback(val);
    return;
  }
  if (game[y + 1] && game[y + 1][x + 1] === val) diagDownRightCheck(val, game, x + 1, y + 1, count + 1, callback);
  return;
};


