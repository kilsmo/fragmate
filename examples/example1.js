import { init, render } from '../lib/fragmate.js';
import { button, div } from '../lib/fmdom.js';

let state = { counter: 0 };

function increase() {
  console.log('increase');
  state.counter++;
  render(state);
}

function decrease() {
  console.log('decrease');
  if (state.counter > 0) {
    state.counter--;
    render(state);
  }
}

function counter(state) {
  return div({
    children: [
      button({ onclick: decrease, children: ['-'] }),
      button({ onclick: increase, children: ['+'] }),
      state.counter.toString()
    ]
  })
}

onload = function() {
  init(document.getElementById('fragmate'), counter);
  render(state);
}
