var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  return someInstance;
};

stackMethods = {};

stackMethods.push = function(value) { 
  this.counter++;
  this.storage[this.counter] = value;
  
  return value;
};

stackMethods.pop = function() {
  var popped = this.storage[this.counter];
  
  
  this.counter--;
  
  return popped;
  
};

stackMethods.size = function() {
  if (this.counter < 0 || this.counter === undefined) {
    return 0;
  }
  return this.counter;
};


