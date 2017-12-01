var Tree = function(value) {
  var newTree = {};
  newTree.value = value;


  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this !== undefined) {
    if (this.value === target) {
      return true;
    } else if (this.children.length > 0) {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target) === true) {
          return true;
        }
      }
    }
    return false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild is O(1)
 contains is O(n)
 */
