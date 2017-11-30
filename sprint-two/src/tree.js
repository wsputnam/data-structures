var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = {};
  child.value = value;
  child.children = [];
  this.children.push(child);
  
};

treeMethods.contains = function(target) {
  var find = function(node) {
    if (node.value === target) {
      return true;
    }
    children.forEach(function(child) {
      find(child);
    });
  };
  find(this);
  
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
