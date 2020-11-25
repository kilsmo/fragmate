import { test } from './test.js';
import { init, render } from '../lib/fragmate.js';
import { b, div } from '../lib/fmdom.js';

function test2(state) {
  return div({ children: ['Hello ', b({ children: ['world'] })] });
}

init(document.getElementById('fragmate'), test2);
render({});
test();
