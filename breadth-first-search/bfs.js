graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["alice"] = ["peggy"];
graph["bob"] = ["anuj", "peggy"];
graph["claire"] = ["thom", "jonny"];
graph["peggy"] = [];
graph["anuj"] = [];
graph["thom"] = [];
graph["jonny"] = [];

const isSeller = name => !!name && name.endsWith("m");

function search(name) {
  let searchQueue = [...graph[name]];
  let searched = {};

  while (searchQueue) {
    const person = searchQueue.shift();

    if (!searched[person]) {
      if (isSeller(person)) return person;

      searched[person] = true;

      searchQueue.push(...graph[person]);
    }
  }

  return undefined;
}

console.log(search("you"));
