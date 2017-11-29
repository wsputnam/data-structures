var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
    return value;
  };

  someInstance.dequeue = function() {
    var popped = storage[0];
    for (var i = 0; i <= counter; i++) {
      storage[i] = storage[i + 1];
    }
    counter--;
    return popped;

  };

  someInstance.size = function() {
    if (counter < 0 || counter === undefined) {
      return 0;
    }
    return counter;
  };

  return someInstance;
};
