import { test } from './test.js';
import { init, render } from '../lib/fragmate.js';
import { b, div } from '../lib/fmdom.js';

function test5(state) {
  return div({ children: [b({ id: 'foo', children: ['Hello world'] })]});
}

init(document.getElementById('fragmate'), test5);
render({});
test();
