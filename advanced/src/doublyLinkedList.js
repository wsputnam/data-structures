var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    var store = list.tail;
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;
    list.tail.prev = store;
    
  };
  
  list.addToHead = function(value) {
    var newNode = Node(value);
    var store = list.head;
    
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    
    list.head.prev = newNode;
    list.head = newNode;
    list.head.next = store;
  };
  

  list.removeHead = function() {
    var head = list.head;
    if (list.head.next === null || list.head.next === undefined) {
      list.head = null;
      list.tail = null;
    }
    if (list.head.next !== null) {
      list.head = list.head.next;
      list.head.prev = null;
    } else {
      list.head = null;
    }

    return head.value;
  };
  
  list.removeTail = function() {
    var tail = list.tail;
    if (list.tail.prev === null || list.tail.prev === undefined) {
      list.head = null;
      list.tail = null;
    }
    if (list.tail.prev !== null) {
      list.tail = list.tail.prev;
      list.tail.next = null;
    } else {
      list.tail = null;
    }

    return tail.value;
  };

  list.contains = function(target) {
    var find = function(node) {      
      if (node.value === target) {
        return true;
      } else if (node.next !== undefined && node.next !== null) {
        if (find(node.next) === true) {
          return true;
        }
      }
      return false; // so our next operation is adding 
    };    
    return find(list.head);
  };
  
  list.tailContains = function(target) {
    var find = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.prev !== undefined && node.prev !== null) {
        if (find(node.prev) === true) {
          return true;
        }
      }
      return false;
    };
    return find(list.tail);
  };
  
  return list;

};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  for insertion and removal, constant time
  for contains, linear time

//  */
