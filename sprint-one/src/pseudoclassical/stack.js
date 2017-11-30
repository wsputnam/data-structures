var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(value) {
  this.counter++;
  this.storage[this.counter] = value;
  return value;
};
Stack.prototype.pop = function() {
  var popped = this.storage[this.counter];
  this.counter--;
  return popped;
};
Stack.prototype.size = function() {
  if (this.counter < 0 || this.counter === undefined) {
    return 0;
  }
  return this.counter;
};

var someInstance = new Stack();