import { afterRender, startRender } from './nodecache.js';

let parentElm;
let renderFn;

/**
 * Initialize fragmate a parent element, where render will happen,
 * and a render function, that will be used in render.
 * 
 * @param {HTMLElement} parentElement 
 * @param {function} renderFunction 
 */
export function init(parentElement, renderFunction) {
  parentElm = parentElement;
  renderFn = renderFunction;
}

/**
 * Renders the state, with the function that was set with init.
 * 
 * @param {object} state The state to render. (an object)
 */
export function render(state) {
  startRender();
  const renderTree = renderFn(state);
  parentElm.innerHTML = '';
  parentElm.appendChild(renderTree);
  afterRender();
}
