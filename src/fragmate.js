let parentElm;
let renderFn;

export function init(parentElement, renderFunction) {
  parentElm = parentElement;
  renderFn = renderFunction;
}

export function render(state) {
  const renderTree = renderFn(state);
  parentElm.innerHTML = '';
  parentElm.appendChild(renderTree);
}
