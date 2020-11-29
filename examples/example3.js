import { init, render } from '../lib/fragmate.js';
import { button, div, input } from '../lib/fmdom.js';

function rerender() {
  console.log('rerender');
  render({});
}

function keep() {
  console.log('keep');
  return div(null, [
    input({ id: 'foo', type: 'text' })
  ]);
}

onload = function() {
  init(document.getElementById('fragmate'), keep);
  render({});
  setTimeout(() => { rerender(); }, 5000);
}
