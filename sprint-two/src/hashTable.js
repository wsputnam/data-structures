

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._storage.collision = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) && this._storage.get(index)[0] !== k) {
    var newArr = [];
    var current = this._storage.get(index);
    newArr.push([k, v]);
    newArr.push(current);
    this._storage.set(index, newArr);
  } else {
    this._storage.set(index, [k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    if (Array.isArray(this._storage.get(index)[0])) {
      var result;
      var tuples = this._storage.get(index);
      tuples.forEach(function(e) {
        if (k === e[0]) {
          result = e[1];
        }
      });
      return result;
    } else {
      return this._storage.get(index)[1];
    }
  }
  //if storage[index] is something
  //then search each node
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


