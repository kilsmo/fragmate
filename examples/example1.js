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
  return div(null, [
    button({
      onclick: decrease
    }, [
      '-'
    ]),
    button({
      onclick: increase
    }, [
      '+'
    ]),
    state.counter.toString()
  ]);
}

onload = function() {
  init(document.getElementById('fragmate'), counter);
  render(state);
}
