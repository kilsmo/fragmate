import { addBeforeUpdateHandler, addAfterUpdateHandler} from './fragmate.mjs';

let renderStack = [];

export function push(id) {
  renderStack.push(id);
}

export function pop() {
  renderStack.pop();
}

export function get(id) {
  let path = '';
  for (let x of renderStack) {
    path += x + '/';
  }
  return path + id;
}

function beforeUpdateHandler(contextUpdated) {
}

function afterUpdateHandler(contextUpdated) {
  renderStack = [];
}

addBeforeUpdateHandler(beforeUpdateHandler);
addAfterUpdateHandler(afterUpdateHandler);
