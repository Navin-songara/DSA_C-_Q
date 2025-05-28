function solveNQueens(n) {
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill('.'));

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
      if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
    }
    return true;
  }

  function backtrack(row) {
    if (row === n) {
      result.push(board.map(row => row.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = 'Q';
        backtrack(row + 1);
        board[row][col] = '.';
      }
    }
  }

  backtrack(0);
  return result;
}

// Test
console.log(solveNQueens(4));
