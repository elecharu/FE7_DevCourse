class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

const tree = {};

function insert(parent, child, position) {
  if (!tree[parent]) {
    tree[parent] = new Node(parent);
  }
  if (!tree[child]) {
    tree[child] = new Node(child);
  }

  if (position === 'left')
    tree[parent].left = tree[child];
  else if (position === 'right')
    tree[parent].right = tree[child];
}

function deleteNode(value) {
  if (!tree[value]) {
    return;
  }

  for (let parent in tree) {
    const node = tree[parent];
    if (node.left.value === value) {
      node.left = null;
    } else if (node.right.value === value) {
      node.right = null;
    }
  }
}

insert("A", "B", "left");
insert("A", "C", "right");
insert("B", "D", "left");
insert("B", "E", "right");

deleteNode("B");

console.log(tree);
