import { test } from './test.js';
import { init, render } from '../lib/fragmate.js';
import { b, div } from '../lib/fmdom.js';

function test4(state) {
  return div({ id: 'foo', children: ['Hello world']});
}

init(document.getElementById('fragmate'), test4);
render({});
test();
