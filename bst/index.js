const create = data => {
    return [undefined, data, undefined];
}

const insert = (root, data) => {
    if(!root) {
        return create(data);
    } else if(data <= root[1]) {
        root[0] = insert(root[0], data);
    } else {
        root[2] = insert(root[2], data);
    }
    return root;
}

const search = (root, data) => {
    if(!root)
        return undefined;
    else if(data === root[1])
        return root[1];
    else if(data < root[1])
        return search(root[0], data);
    else
        return search(root[2], data);
}

let root = insert(undefined, 10);
root = insert(root, 20);
root = insert(root, 5);
root = insert(root, 1);
root = insert(root, 30);
root = insert(root, 30);

console.log(search(root, 30));
