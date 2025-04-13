// Graph representation

// Adjacency matrix

class GraphMatrix {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.matrix = [];

    for (let i = 0; i < numVertices; i++) {
      this.matrix[i] = new Array(numVertices).fill(0);
    }
  }

  addEdge(v1, v2, weight = 1) {
    if (v1 >= this.numVertices || v2 >= this.numVertices || v1 < 0 || v2 < 0) {
      return;
    }

    this.matrix[v1][v2] = weight;

    // for undirected graph
    this.matrix[v2][v1] = weight;
  }

  removeEdge(v1, v2) {
    if (v1 >= this.numVertices || v2 >= this.numVertices || v1 < 0 || v2 < 0) {
      return;
    }

    this.matrix[v1][v2] = 0;

    // for undirected graph
    this.matrix[v2][v1] = 0;
  }

  hasEdge(v1, v2) {
    if (v1 >= this.numVertices || v2 >= this.numVertices || v1 < 0 || v2 < 0) {
      return false;
    }

    return this.matrix[v1][v2] != 0;
  }

  getEdgeWeight(v1, v2) {
    if (v1 >= this.numVertices || v2 >= this.numVertices || v1 < 0 || v2 < 0) {
      return null;
    }
    return this.matrix[v1][v2];
  }

  getNeighbors(vertex) {
    if (vertex >= this.numVertices || vertex < 0) {
      return [];
    }

    let neighbours = [];
    for (let i = 0; i < this.numVertices; i++) {
      if (this.matrix[vertex][i] != 0) {
        neighbours.push(i);
      }
    }
    return neighbours;
  }

  printMatrix() {
    for (let i = 0; i < this.numVertices; i++) {
      console.log(this.matrix[i]);
    }
  }
}

const graphMatrix = new GraphMatrix(6);
graphMatrix.addEdge(1, 2, 2);
graphMatrix.addEdge(1, 3, 3);
graphMatrix.addEdge(2, 4, 1);
graphMatrix.addEdge(2, 5, 6);
graphMatrix.addEdge(3, 4, 4);
graphMatrix.addEdge(4, 5, 3);

// graphMatrix.printMatrix();

// console.log(graphMatrix.getNeighbors(1));
// console.log(graphMatrix.getNeighbors(2));
// console.log(graphMatrix.getNeighbors(3));
// console.log(graphMatrix.getNeighbors(4));
// console.log(graphMatrix.getNeighbors(5));

// Adjacency list

class GraphList {
  constructor(numVertices) {
    this.numVertices = numVertices;

    this.adjList = new Map();

    for (let i = 0; i < numVertices; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(v1, v2, weight = 1) {
    if (v1 >= this.numVertices || v2 >= this.numVertices || v1 < 0 || v2 < 0) {
      return;
    }

    this.adjList.get(v1).push({ vertex: v2, weight: weight });

    // for undirected graph
    this.adjList.get(v2).push({ vertex: v1, weight: weight });
  }

  removeEdge(v1, v2) {
    if (v1 >= this.numVertices || v2 >= this.numVertices || v1 < 0 || v2 < 0) {
      return;
    }

    // in-build method
    // this.adjList.set(
    //   v1,
    //   this.adjList.get(v1).filter((edge) => edge.vertex != v2)
    // );

    let edges = this.adjList.get(v1);
    let newEdges = [];
    for (let edge of edges) {
      if (edge.vertex != v2) {
        newEdges.push(edge);
      }
    }

    this.adjList.set(v1, newEdges);

    // for undirect graph
    // this.adjList.set(
    //   v2,
    //   this.adjList.get(v2).filter((edge) => edge.vertex != v1)
    // );

    let edges2 = this.adjList.get(v1);
    let newEdges2 = [];
    for (let edge of edges2) {
      if (edge.vertex != v2) {
        newEdges2.push(edge);
      }
    }

    this.adjList.set(v1, newEdges2);
  }

  hasEdge(v1, v2) {
    if (v1 >= this.numVertices || v2 >= this.numVertices || v1 < 0 || v2 < 0) {
      return false;
    }

    // return this.adjList.get(v1).some((edge) => edge.vertex == v2); // in-build method

    let edges = this.adjList.get(v1);
    // for (let i = 0; i < edges.length; i++) {
    //   if (edges[i].vertex == v2) {
    //     return true;
    //   }
    // }

    // method 2
    for (let edge of edges) {
      if (edge.vertex === v2) {
        return true;
      }
    }
    return false;
  }

  getEdgeWeight(v1, v2) {
    if (v1 >= this.numVertices || v2 >= this.numVertices || v1 < 0 || v2 < 0) {
      return null;
    }

    // let edge = this.adjList.get(v1).find((edge) => edge.vertex == v2); // in-build method
    // return edge ? edge.weight : null;

    let edges = this.adjList.get(v1);

    for (let edge of edges) {
      if (edge.vertex === v2) {
        return edge.weight;
      }
    }
    return null;
  }

  getNeighbors(vertex) {
    if (vertex >= this.numVertices || vertex < 0) {
      return [];
    }

    // return this.adjList.get(vertex).map((edge) => edge.vertex); // in-build

    let edges = this.adjList.get(vertex);
    let neighbours = [];
    for (let edge of edges) {
      neighbours.push(edge.vertex);
    }
    return neighbours;
  }

  printList() {
    for (let i = 0; i < this.numVertices; i++) {
      let neighbors = this.adjList
        .get(i)
        .map((edge) => `${edge.vertex}(${edge.weight})`)
        .join(",");
      console.log(`${i} -> ${neighbors}`);
    }
  }
}

const graphList = new GraphList(6);
graphList.addEdge(1, 2, 2);
graphList.addEdge(1, 3, 3);
graphList.addEdge(2, 4, 1);
graphList.addEdge(2, 5, 6);
graphList.addEdge(3, 4, 4);
graphList.addEdge(4, 5, 3);

graphList.printList();

console.log(graphList.getNeighbors(1));
console.log(graphList.getNeighbors(2));
console.log(graphList.getNeighbors(3));
console.log(graphList.getNeighbors(4));
console.log(graphList.getNeighbors(5));
