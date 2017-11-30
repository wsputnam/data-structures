var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
  return value;
};
Queue.prototype.dequeue = function() {
  var dequeued = this.storage[0];
  for (var i = 0; i <= this.counter; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  this.counter--;
  return dequeued;
};
Queue.prototype.size = function() {
  if (this.counter < 0 || this.counter === undefined) {
    return 0;
  }
  return this.counter;
};

