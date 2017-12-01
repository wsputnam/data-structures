var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage[item]) {
    this._storage[item] = 0;
  } else {
    this._storage[item]++;
  }
};

setPrototype.contains = function(item) {
  var setKeys = Object.keys(this._storage);
  if (this._storage[item] !== undefined) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 add is O(1)
 contains is O(1)
 remove is O(1)
 */
