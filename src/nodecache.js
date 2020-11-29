let currentCache = null;
let oldCache = null;
let focusedElementId = null;

export function getKeptNode(id) {
  if (!oldCache) {
    return undefined;
  }
  return oldCache[id];
}

export function keepNode(node, id) {
  currentCache[id] = node;
}

export function startRender() {
  oldCache = currentCache;
  currentCache = {};
  focusedElementId = null;
  const activeElement = document.activeElement;
  if (activeElement && getKeptNode(activeElement.getAttribute('id'))) {
    focusedElementId = activeElement.getAttribute('id');
  }
}

export function afterRender() {
  const focusedElement = document.getElementById(focusedElementId);
  if (focusedElement) {
    focusedElement.focus();
  }
}
