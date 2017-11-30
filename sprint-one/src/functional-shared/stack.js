var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    counter: 0
  };
  
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {

  push: function(value) {
    this.counter++;
    this.storage[this.counter] = value;
    return value;
  },
  
  pop: function() {
    
    var popped = this.storage[this.counter];
    //delete this.storage[this.counter];

    this.counter--;
    return popped;
    
  },
  
  size: function() {
    if (this.counter < 0 || this.counter === undefined) {
      return 0;
    }
    
    return this.counter;
    
  }
};


