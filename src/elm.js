function htmlelm(name, props) {
  const elm = document.createElement(name);
  for (let x in props) {
    if (x == 'children') {
      const children = props[x];
      for (let child of children) {
        elm.appendChild(
          typeof (child == 'string') ?
            document.createTextNode(child) :
            child
        );
      }
    }
    else {
      elm.setAttribute(x, props[x]);
    }
  }
  return elm;
}
