export const gameSize = 3;

export const defaultBoard = (size) => {
  return Array(size).fill().map(()=>Array(size).fill())
};

export const checkForWinner = (game, lastX, lastY, callback) => {
  let val = game[lastY][lastX];

  const horizontalCheck = () => {
    let count = 1;

    const leftCheck = (x, y) => {  
      if (count === gameSize) {
        callback(val);
        return;
      }
      if (game[y][x - 1] === val) {
        count++;
        leftCheck(x - 1, y);
      }
      return;
    };
    
    const rightCheck = (x, y) => {
      if (count === gameSize) {
        callback(val);
        return;
      }
      if (game[y][x + 1] === val) {
        count++;
        rightCheck(x + 1, y);
      }
      return;
    };

    leftCheck(lastX, lastY);
    rightCheck(lastX, lastY);
  };

  const vertCheck = () => {
    let count = 1;

    const upCheck = (x, y) => {
      if (count === gameSize) {
        callback(val);
        return;
      }
      if (game[y - 1] && game[y - 1][x] === val) {
        count++;
        upCheck(x, y - 1);
      }
      return;
    };
    
    const downCheck = (x, y) => {
      if (count === gameSize) {
        callback(val);
        return;
      }
      if (game[y + 1] && game[y + 1][x] === val) {
        count++;
        downCheck(x, y + 1);
      }
      return;
    };

    upCheck(lastX, lastY);
    downCheck(lastX, lastY);
  };

  const diag1Check = () => {
    let count = 1;

    const diagUpRightCheck = (x, y) => {
      if (count === gameSize) {
        callback(val);
        return;
      }
      if (game[y - 1] && game[y - 1][x + 1] === val) {
        count++;
        diagUpRightCheck(x + 1, y - 1);
      }
      return;
    };
    
    const diagDownLeftCheck = (x, y) => {
      if (count === gameSize) {
        callback(val);
        return;
      }
      if (game[y + 1] && game[y + 1][x - 1] === val) {
        count++;
        diagDownLeftCheck(x - 1, y + 1);
      }
      return;
    };

    diagDownLeftCheck(lastX, lastY);
    diagUpRightCheck(lastX, lastY);
  };

  const diag2Check = () => {
    let count = 1;

    const diagDownRightCheck = (x, y) => {
      if (count === gameSize) {
        callback(val);
        return;
      }
      if (game[y + 1] && game[y + 1][x + 1] === val) {
        count++;
        diagDownRightCheck(x + 1, y + 1);
      }
      return;
    };
    
    const diagUpLeftCheck = (x, y) => {
      if (count === gameSize) {
        callback(val);
        return;
      }
      if (game[y - 1] && game[y - 1][x - 1] === val) {
        count++;
        diagUpLeftCheck(x - 1, y - 1);
      }
      return;
    };

    diagUpLeftCheck(lastX, lastY);
    diagDownRightCheck(lastX, lastY);
  };

  horizontalCheck();
  vertCheck();
  diag1Check();
  diag2Check();
};

