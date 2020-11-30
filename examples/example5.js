import { init, render } from '../lib/fragmate.js';
import { button, div } from '../lib/fmdom.js';

function rerender() {
  console.log('rerender');
  render({});
}

function getChildren() {
  const children = [];
  for (let i = 0; i < 40; i++) {
    children.push(helloDiv());
  }
  children.push(button({ onclick: rerender }, ['Rerender']));
  return children;
}

function helloDiv() {
  return div(null, ['Hello world']);
}

function scroll() {
  console.log('scroll');
  return div(null, [div({ overflow: 'scroll' }, getChildren())]);
}

onload = function() {
  init(document.getElementById('fragmate'), scroll);
  render({});
}
