export function test() {
  const renderedContentElm = document.getElementById('fragmate').firstChild;
  const shouldBeElm = document.getElementById('shouldbe').firstChild;
  console.log(renderedContentElm.isEqualNode(shouldBeElm));
}