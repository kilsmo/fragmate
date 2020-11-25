import { test } from './test.js';
import { init, render } from '../lib/fragmate.js';
import { b, div } from '../lib/fmdom.js';

function test3(state) {
  return div({ children: [
    'Hello ',
    div({
      children: [
        b({ 'children': ['world'] })
      ]
    })
  ]})
}

init(document.getElementById('fragmate'), test3);
render({});
test();
