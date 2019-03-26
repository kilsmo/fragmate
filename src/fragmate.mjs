const beforeUpdateHandlers = [];
const afterUpdateHandlers = [];
let rootView;
let parentElm;

export function init(state, root, parent) {
  rootView = root;
  parentElm = parent;
  update(state);
}

export function update(state, contextUpdated) {
  beforeUpdateHandlers.forEach((handler) => handler(contextUpdated));
  parentElm.innerHTML = '';
  parentElm.appendChild(rootView(state));
  afterUpdateHandlers.forEach((handler) => handler(contextUpdated));
}

export function addBeforeUpdateHandler(handler) {
  beforeUpdateHandlers.push(handler);
}

export function addAfterUpdateHandler(handler) {
  afterUpdateHandlers.push(handler);
}
