infinity = float("inf")

graph = {}
graph["start"] = {"a": 6, "b": 2, "c": 1}
graph["a"] = {"fin": 1}
graph["b"] = {"a": 3, "fin": 5}
graph["c"] = {"b": 1, "fin": 6}
graph["fin"] = {}

costs_from_start = {"a": 6, "b": 2, "c": 1, "fin": infinity}

parents = {"a": "start", "b": "start", "c": "start", "fin": None}

processed = []

def lowest_cost_path():
    node = find_lowest_cost_node(costs_from_start)
    
    while node is not None:
        cost = costs_from_start[node]
        neighbors = graph[node]

        for neighbor in neighbors.keys():
            new_cost = cost + neighbors[neighbor]
            if new_cost < costs_from_start[neighbor]:
                costs_from_start[neighbor] = new_cost
                parents[neighbor] = node
        
        processed.append(node)
        node = find_lowest_cost_node(costs_from_start)
    
    return (parents, costs_from_start)

def find_lowest_cost_node(nodes):
    lowest_cost = infinity
    lowest_cost_node = None
    for node in nodes:
        cost = nodes[node]
        if cost < lowest_cost and node not in processed:
            lowest_cost = cost
            lowest_cost_node = node
    return lowest_cost_node

print lowest_cost_path()
