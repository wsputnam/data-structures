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
  
    //for (var key in storage) {
    return storage[count];
    delete storage[count];
      //if (key === Object.keys(storage).length) {
       // someInstance[key] = storage[key];
       // return storage[key];
        //delete key;
      //}
    //}
  };//

  someInstance.size = function() {
    if (count < 0 || count === undefined) {
      return 0;
    }
    return count;
  };


  return someInstance;
};
