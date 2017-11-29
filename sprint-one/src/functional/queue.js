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
    counter--;
    return storage[0];
    delete storage[0];
    for (var key in storage) {
      key = (key - 1);
    }

  };

  someInstance.size = function() {
    if (counter < 0 || counter === undefined) {
      return 0;
    }
    return counter;
  };

  return someInstance;
};
