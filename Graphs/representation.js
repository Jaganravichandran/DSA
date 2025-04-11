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
    // this.matrix[v2][v1] = 0;
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
