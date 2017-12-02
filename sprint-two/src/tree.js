var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
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

treeMethods.removeFromParent = function(target) {
  if (this !== undefined) {
    if (this.value === target) {
      this.parent.children.splice(this.parent.children.indexOf(this), 1);
      this.parent = null;
    } else if (this.children.length > 0) {
      for (var i = 0; i < this.children.length; i++) {
        this.children[i].removeFromParent(target);
      }
    }
    return false;
  }
};

treeMethods.traverse = function(cb) {
  this.value && cb(this.value);
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      treeMethods.traverse.call(this.children[i], cb);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild is O(1)
 contains is O(n)
 */