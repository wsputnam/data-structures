var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.counter = 0;
  someInstance.storage = {};
  return someInstance;
};

queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
  return value;
};

queueMethods.dequeue = function() {
  var popped = this.storage[0];
  for (var i = 0; i <= this.counter; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  this.counter--;
  return popped;
};

queueMethods.size = function() {
  if (this.counter < 0 || this.counter === undefined) {
    return 0;
  }
  
  return this.counter;
};

