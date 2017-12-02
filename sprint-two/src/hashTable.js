

var HashTable = function() {
  this._limit = 4;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;

};

HashTable.prototype.insert = function(k, v) {
  if (this.counter / this._limit > 0.75) {
    this._limit *= 2;
  }
  if (this.counter / this._limit < 0.25) {
    this._limit *= 0.5;
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(element) {
    if (Array.isArray(element)) {
      HashTab
    }
    // same function here
  });
  if (this._storage.get(index) && this._storage.get(index)[0] !== k) {
    var newArr = [];
    var current = this._storage.get(index);
    newArr.push([k, v]);
    newArr.push(current);
    this._storage.set(index, newArr);
  } else {
    this._storage.set(index, [k, v]);
  }
  this.counter++;
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
 Insert will always be constant (O(1)); Same for remove.
Remove will be constant provided there are no collisions, or else they both become linear (O(n))
*/


