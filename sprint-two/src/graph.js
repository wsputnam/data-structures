

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

//var newGraph = new Node(5);

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //subarray is for edges
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // 
  return this.nodes.indexOf(node) !== -1;
  
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var spliceFunc = this.edges.splice.bind(this.edges);
  var nodeLoc = this.nodes.indexOf(node);
  nodeLoc !== -1 && this.nodes.splice(nodeLoc, 1);
  this.edges.forEach(function(edge, i) {
    if (JSON.parse(edge)[0] === node || JSON.parse(edge)[1] === node) {
      spliceFunc(i, 1);
    }
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges.indexOf(JSON.stringify([fromNode, toNode])) !== -1 || this.edges.indexOf(JSON.stringify([toNode, fromNode])) !== -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // var firstNode = this.nodes.indexOf(fromNode);
  // fromNode.push(edges);
  if (this.hasEdge.apply(this, arguments)) {
    return this.nodes;
  } else if (this.nodes.indexOf(fromNode) !== -1 && this.nodes.indexOf(toNode) !== -1) {
    this.edges.push(JSON.stringify([fromNode, toNode])); 
  }
  if (fromNode === toNode) {
    return false;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var foundEdge = this.edges.indexOf(JSON.stringify([fromNode, toNode]));
  var foundEdge2 = this.edges.indexOf(JSON.stringify([toNode, fromNode]));
  if (foundEdge !== -1) {
    this.edges.splice(foundEdge, 1);
  } 
  if (foundEdge2 !== -1) {
    this.edges.splice(foundEdge2, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  addNode is constant
  The rest are linear
 */


