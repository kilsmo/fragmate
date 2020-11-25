const node1 = document.createElement('a');
node1.appendChild(document.createElement('b'));

const node2 = document.createElement('a');
node2.appendChild(document.createElement('b'));

console.log(node1.isEqualNode(node2));
