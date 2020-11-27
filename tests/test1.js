import { test } from './test.js';
import { init, render } from '../lib/fragmate.js';
import { div } from '../lib/fmdom.js';

function test1(state) {
  return div(null, ['Hello world']);
}

init(document.getElementById('fragmate'), test1);
render({});
test();
