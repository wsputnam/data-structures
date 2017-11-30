var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
    return value;
  };

  someInstance.pop = function() {
    count--;
  
    return storage[count];
  };

  someInstance.size = function() {
    if (count < 0 || count === undefined) {
      return 0;
    }
    return count;
  };


  return someInstance;
};
