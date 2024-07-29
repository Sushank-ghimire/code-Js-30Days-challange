// Tree Traversal In Javascript

class TreeTraversal {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const calculateTreeDepth = (root) => {
  // Base case: if the tree is empty, depth is 0
  if (root === null) {
    return 0;
  }

  // Calculate the depth of left and right subtrees
  const leftDepth = calculateTreeDepth(root.left);
  const rightDepth = calculateTreeDepth(root.right);

  // Depth of the tree is the maximum of left and right subtree depths + 1 for the root
  return Math.max(leftDepth, rightDepth) + 1;
};

const tree = new TreeTraversal(
  1,
  new TreeTraversal(
    2,
    new TreeTraversal(4),
    new TreeTraversal(5),
    new TreeTraversal(4, new TreeTraversal(5))
  ),
  new TreeTraversal(3, null, new TreeTraversal(6), new TreeTraversal(7))
);

console.log(calculateTreeDepth(tree));
