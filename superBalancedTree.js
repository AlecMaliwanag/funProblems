  function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

BinaryTreeNode.prototype.superBalance = function checkBalance(tree) {
  var superBalance = true;
  //first impulse is recursion
  //screen for no nodes
  var recurse = function recursion(tree) {
    if(tree.left === null && tree.right === null) {
      return;
    //screen for both nodes
    } else if (tree.left && tree.right) {
      recurse(tree.left);
      recurse(tree.right);
    } else {
      //screen unbalance on the left
      if (tree.left) {
        if (tree.left.left || tree.left.right) {
          superBalance = false;
        } 
      //screen unbalance on the right  
      } else if (tree.right) {
        if (tree.right.left || tree.right.right) {
          superBalance = false;
        }
      }
    }
  }
  recurse(tree);
  return superBalance;
};

var newTree = new BinaryTreeNode(5);
newTree.insertLeft(5);
newTree.insertRight(5);
newTree.left.insertLeft(2);
newTree.right.insertRight(8);
newTree.right.insertLeft(6);
newTree.right.right.insertRight(9);
newTree.right.right.right.insertRight(2);
newTree.superBalance(newTree);

  //check left node, check right node
  //if both or no nodes, move on
  //if node on only one side, check node's left and right
  //if there is a presence of any node, UNBALANCED
}