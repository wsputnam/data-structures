var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.left = null;
  newTree.right = null;

  _.extend(newTree, bstMethods);

  return newTree;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  
  var newNode = Node(value);

  //nodeIsGreater
  if (newNode.value > this.value) {
    if (this.right === null) {
      this.right = newNode;
    } else {
      // recurse through greater nodex
      this.insert.call(this.right, value);
    }
  }

  //nodeIsLess
  if (newNode.value < this.value) {
    if (this.left === null) {
      this.left = newNode;
    } else {
      // recurse through smaller nodes
      this.insert.call(this.left, value);
    }
  }

 // do not add equal values as we do not want duplicates

  //newTree.push(value);
  
};

bstMethods.contains = function(target) {
  // if (this === null) {
  //   return false;
  // }
  if (this.value === target) {
    return true;
  }
  if (target < this.value && this.left !== null) {
    if (this.contains.call(this.left, target)) {
      return true;
    }
  }
  if (target > this.value && this.right !== null) {
    if (this.contains.call(this.right, target)) {
      return true;
    }
  }
  return false;
  // if ((this.left !== null && this.left.value === target) || (this.right !== null && this.right.value === target)) {
  //   return true;
  // } else {
  //   return false;
  // }

 // if this.value < target, look left
// if this.value > target, look right
// else return false

  
};

bstMethods.depthFirstLog = function(callback) {
  // iterate through whole tree
  //get an array of values in tree
  //loop with for loop
  //for each [i] execute function
  // loop through this.value, and this.right and this.left
  // if those aren't null, apply function
  callback(this.value); // this.value = this.value*2;
  if (this.left !== null) {
    bstMethods.depthFirstLog.call(this.left, callback);
  }
  if (this.right !== null) {
    // callback(this.right.value);
    bstMethods.depthFirstLog.call(this.right, callback);
  }
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.left = null;
  node.right = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
  search is O(log n); insert is also O(log n). depth first log is linear (O(n))
 */
