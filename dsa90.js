// Trie Node
class TrieNode {
  constructor() {
    this.left = null;  // bit 0
    this.right = null; // bit 1
  }
}

function findMaximumXOR(nums) {
  const root = new TrieNode();
  
  for (let num of nums) {
    let node = root;
    for (let i = 31; i >= 0; i--) {
      let bit = (num >> i) & 1;
      if (bit === 0) {
        if (!node.left) node.left = new TrieNode();
        node = node.left;
      } else {
        if (!node.right) node.right = new TrieNode();
        node = node.right;
      }
    }
  }

  let maxXOR = 0;

  for (let num of nums) {
    let node = root, xor = 0;
    for (let i = 31; i >= 0; i--) {
      let bit = (num >> i) & 1;
      if (bit === 0 && node.right) {
        xor |= (1 << i);
        node = node.right;
      } else if (bit === 1 && node.left) {
        xor |= (1 << i);
        node = node.left;
      } else {
        node = bit === 0 ? node.left : node.right;
      }
    }
    maxXOR = Math.max(maxXOR, xor);
  }

  return maxXOR;
}

// Test
console.log(findMaximumXOR([3,10,5,25,2,8])); // Output: 28
