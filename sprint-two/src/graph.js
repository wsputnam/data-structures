

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.index = [];
  this.edges = [];
};

//var newGraph = new Node(5);

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //subarray is for edges
  var graphPoint = node;
  this.nodes.push(graphPoint);
  this.index.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // 
  if (this.nodes[0]) { 
    return this.nodes[0].indexOf(node) !== -1;  
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodeLoc = this.nodes[0].indexOf(node);
  nodeLoc !== -1 && this.nodes.splice(nodeLoc, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var firstNode = this.index.indexOf(fromNode);
  var secondNode = this.index.indexOf(toNode);
  if (firstNode !== -1 && secondNode !== -1) {
    if (this.nodes[firstNode][1].indexOf(toNode) !== -1 && this.nodes[secondNode][1].indexOf(fromNode) !== -1) {
      return true;
    } 
  }
  return false;
  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // var firstNode = this.index.indexOf(fromNode);
  // var secondNode = this.index.indexOf(toNode);
  // this.nodes[firstNode][1].concat(toNode);
  // this.nodes[secondNode][1].concat(fromNode);
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(node) {
    cb(node);
  });
};

// var Node = function(value) {

//   this.value = value;
//   this.edges = []; // store connected dges here

// };

/*
 * Complexity: What is the time complexity of the above functions?
 */


