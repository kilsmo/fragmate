import { init, render } from '../lib/fragmate.js';
import { button, div } from '../lib/fmdom.js';

function rerender() {
  console.log('rerender');
  render({});
}

function helloDiv() {
  return div(null, ['Hello world']);
}

function scroll() {
  console.log('scroll');
  return div(null, [
    div({ overflow: 'scroll' }, [
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      helloDiv(),
      button({ onclick: rerender }, ['Rerender'])
    ])
  ]);
}

onload = function() {
  init(document.getElementById('fragmate'), scroll);
  render({});
}
