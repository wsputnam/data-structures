

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    var arr = [];
    arr.push(this._storage.get(index));
    arr.push([k, v]);
    this._storage.set(index, arr);
  } else {
    this._storage.set(index, [k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index).length > 1) {
    this._storage.each(function(element) {
      if (k === element[0]) {
        return element[1];
      }
    });
  } else {
    return this._storage.get(index);
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


