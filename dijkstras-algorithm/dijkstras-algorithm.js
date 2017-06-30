let graph = {};
graph["start"] = { a: 6, b: 2, c: 1 };
graph["a"] = { fin: 1 };
graph["b"] = { a: 3, fin: 5 };
graph["c"] = { b: 1, fin: 6 };
graph["fin"] = {};

let costs = { a: 6, b: 2, c: 1, fin: Infinity };
let parents = { a: "start", b: "start", c: "start", fin: undefined };

let processed = {};

const findLowestCostNode = nodes => {
  let lowestCost = Infinity;
  let lowestCostNode;

  for (node in nodes) {
    if (processed[node]) continue;

    const cost = nodes[node];
    if (cost < lowestCost) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }

  return lowestCostNode;
};

const findLowestCostPath = () => {
  let node = findLowestCostNode(costs);

  while (node) {
    const cost = costs[node];
    const neighbors = graph[node];
    for (neighbor in neighbors) {
      const newCost = cost + neighbors[neighbor];

      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
        parents[neighbor] = node;
      }
    }

    processed[node] = true;
    node = findLowestCostNode(costs);
  }

  return costs;
};

console.log(findLowestCostPath());
