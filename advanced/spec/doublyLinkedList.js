describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should contain all doubly linked list methods', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when addToTail is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });
  
  
  it('should designate a new head when addToHead is called', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });
  
  it('should remove the tail from the list when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(8);
    expect(doublyLinkedList.tail.value).to.equal(8);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(4);
  });
  
  it('should return the value of the former tail when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToHead(6);
    expect(doublyLinkedList.removeTail()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });
  
  it('should insert a list within a list', function() {
    var b = DoublyLinkedList();
    b.addToTail(1);
    b.addToTail(4);
    doublyLinkedList.addToTail(b);
    expect(doublyLinkedList.contains(b)).to.equal(true);
  });
  
  it('should have next and prev properties on each node', function() {
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.prev.value).to.equal(5);
    expect(doublyLinkedList.head.next.value).to.equal(4);
  });
  
  it('should be able to search backwards through nodes', function() {
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tailContains(4)).to.equal(true);
    expect(doublyLinkedList.tailContains(5)).to.equal(true);
  });

  // add more tests here to test the functionality of doublyLinkedList
});
