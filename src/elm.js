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
export function elm(name, attrs, children) {
  const e = document.createElement(name);
  if (attrs) {
    for (let x in attrs) {
      if (x.startsWith('on')) {
        e.addEventListener(x.substring(2), attrs[x]);
      } else {
        e.setAttribute(x, attrs[x]);
      }
    }
  }
  if (children) {
    for (let child of children) {
      e.appendChild(
        (typeof child) == 'string' ?
          document.createTextNode(child) :
          child
      );
    }
  }
  return e;
}
