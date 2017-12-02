describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });
  
  it('should add duplicates without problems', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
    expect(tree.contains(6)).to.equal(true);
  });
  
  it('should have advanced method removeFromParent and traverse', function() {
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
  });
  
  it('should have a parent property for all nodes', function() {
    expect(tree.parent).to.equal(null);
    tree.addChild(4);
    expect(tree.children[0].parent).to.equal(tree);
  });

  it('should correctly disassociate parents and orphan children', function() {
    tree.addChild(4);
    tree.addChild(9);
    tree.removeFromParent(9);
    expect(tree.contains(9)).to.equal(false);
  });
  
  it('should remove all children from tree after parents are removed', function() {
    tree.addChild(4);
    tree.addChild(9);
    tree.addChild(20);
    tree.children[0].addChild(1);
    tree.removeFromParent(4);
    expect(tree.contains(1)).to.equal(false);
  });
  
  it('should run a callback function on every item in the tree', function() {
    tree.addChild(1);
    tree.addChild(4);
    tree.children[0].addChild(1);
    tree.children[0].children[0].addChild(9);
    
    var arr = [];
    var callbackTest = function(x) {
      arr.push(x * 2);
    };
    tree.traverse(callbackTest);
    
    expect(arr.includes(2)).to.equal(true);
    expect(arr.includes(18)).to.equal(true);
    expect(arr.includes(8)).to.equal(true);
    expect(arr.includes(9)).to.equal(false);
    
  });

});
