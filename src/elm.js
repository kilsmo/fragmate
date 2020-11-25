/**
 * Returns an element with a name and its props.
 * children is a special prop, to simplify the
 * api. In children, the children of this elm
 * is placed. If a child is a string, a TextNode
 * will be created, otherwise the child node will
 * be returned.
 * 
 * @param {string} name
 * @param {object} props
 */
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
