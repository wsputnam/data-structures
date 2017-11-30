var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    counter: 0
  };
  
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
    return value;
  },
  
  dequeue: function() {
    
    var popped = this.storage[0];
  
    
    for (var i = 0; i <= this.counter; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    
    this.counter = this.counter - 1;
    
    return popped;
    
  },
  
  size: function() {
    if (this.counter < 0 || this.counter === undefined) {
      return 0;
    }
    
    return this.counter;
    
  }

};


