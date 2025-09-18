// tri node
class TrieNode {
  constructor() {
    this.children = {};
    this.word = null;
  }
}

function findWords(board, words) {
  const root = new TrieNode();

  for (let word of words) {
    let node = root;
    for (let c of word) {
      if (!node.children[c]) node.children[c] = new TrieNode();
      node = node.children[c];
    }
    node.word = word;
  }

  const result = [];
  const rows = board.length, cols = board[0].length;

  function backtrack(r, c, node) {
    const char = board[r][c];
    const child = node.children[char];
    if (!child) return;

    if (child.word) {
      result.push(child.word);
      child.word = null; // avoid duplicate
    }

    board[r][c] = '#';
    for (let [dr, dc] of [[0,1],[1,0],[0,-1],[-1,0]]) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && board[nr][nc] !== '#') {
        backtrack(nr, nc, child);
      }
    }
    board[r][c] = char;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      backtrack(r, c, root);
    }
  }

  return result;
}

// Test
console.log(findWords(
  [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
  ["oath","pea","eat","rain"]
)); // ["oath","eat"]
