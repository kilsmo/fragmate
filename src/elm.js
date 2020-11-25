export function elm(name, props) {
  const e = document.createElement(name);
  for (let x in props) {
    if (x == 'children') {
      const children = props[x];
      for (let child of children) {
        e.appendChild(
          typeof (child == 'string') ?
            document.createTextNode(child) :
            child
        );
      }
    }
    else {
      e.setAttribute(x, props[x]);
    }
  }
  return e;
}
