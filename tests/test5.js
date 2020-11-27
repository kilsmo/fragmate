import { test } from './test.js';
import { init, render } from '../lib/fragmate.js';
import { b, div } from '../lib/fmdom.js';

function test5(state) {
  return div(null, [
    b({
      id: 'foo'
    }, [
      'Hello world'
    ])
  ]);
}

init(document.getElementById('fragmate'), test5);
render({});
test();
