var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;
    
  };

  list.removeHead = function() {
    var head = list.head;
    if (list.head.next === null || list.head.next === undefined) {
      list.head = null;
      list.tail = null;
    }
    if (list.head.next !== null) {
      list.head = list.head.next;
    } else {
      list.head = null;
    }

    return head.value;
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
  
  // need to return the list at the end of the function expression
  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  for insertion and removal, constant time
  for contains, linear time

//  */
