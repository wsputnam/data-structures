describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });
  it('should test if a set contains an item', function() {
    set.add('Mel Gibson');
    set.add('Susan Sarandon');
    expect(set.contains('Danny Glover')).to.equal(false);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });
  it('should add non-string values', function() {
    set.add(2);
    set.add(3);
    set.add([]);
    set.add(false);
    expect(set.contains(2)).to.equal(true);
    expect(set.contains(4)).to.equal(false);
    expect(set.contains(false)).to.equal(true);
    expect(set.contains([])).to.equal(true);
  });

});
