import { test } from './test.js';
import { init, render } from '../lib/fragmate.js';
import { b, div } from '../lib/fmdom.js';

function test3(state) {
  return div(null, [
    'Hello ',
    div(null, [
      b(null, [
        'world'
      ])
    ])
  ]);
}

init(document.getElementById('fragmate'), test3);
render({});
test();
