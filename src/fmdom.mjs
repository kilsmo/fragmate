function htmlelm(name, props) {
  const elm = document.createElement(name);
  for (let x in props) {
      if (x == 'children') {
          const children = props[x];
          for (let i = 0; i < children.length; i++) {
              if (typeof (children[i]) == 'string') {
                  elm.appendChild(document.createTextNode(children[i]));
              }
              else {
                  elm.appendChild(children[i]);
              }
          }
      }
      else {
          elm.setAttribute(x, props[x]);
      }
  }
  return elm;
}

export function a(props) {
  return htmlelm('a', props);
}

export function abbr(props) {
  return htmlelm('abbr', props);
}

export function acronym(props) {
  return htmlelm('acronym', props);
}

export function address(props) {
  return htmlelm('address', props);
}

export function applet(props) {
  return htmlelm('applet', props);
}

export function area(props) {
  return htmlelm('area', props);
}

export function article(props) {
  return htmlelm('article', props);
}

export function aside(props) {
  return htmlelm('aside', props);
}

export function audio(props) {
  return htmlelm('audio', props);
}

export function b(props) {
  return htmlelm('b', props);
}

export function bdi(props) {
  return htmlelm('bdi', props);
}

export function bdo(props) {
  return htmlelm('bdo', props);
}

export function big(props) {
  return htmlelm('big', props);
}

export function blockquote(props) {
  return htmlelm('blockquote', props);
}

export function br(props) {
  return htmlelm('br', props);
}

export function button(props) {
  return htmlelm('button', props);
}

export function canvas(props) {
  return htmlelm('canvas', props);
}

export function caption(props) {
  return htmlelm('caption', props);
}

export function center(props) {
  return htmlelm('center', props);
}

export function cite(props) {
  return htmlelm('cite', props);
}

export function code(props) {
  return htmlelm('code', props);
}

export function col(props) {
  return htmlelm('col', props);
}

export function colgroup(props) {
  return htmlelm('colgroup', props);
}

export function datalist(props) {
  return htmlelm('datalist', props);
}

export function dd(props) {
  return htmlelm('dd', props);
}

export function del(props) {
  return htmlelm('del', props);
}

export function details(props) {
  return htmlelm('details', props);
}

export function dfn(props) {
  return htmlelm('dfn', props);
}

export function dir(props) {
  return htmlelm('dir', props);
}

export function div(props) {
  return htmlelm('div', props);
}

export function dl(props) {
  return htmlelm('dl', props);
}

export function dt(props) {
  return htmlelm('dt', props);
}

export function em(props) {
  return htmlelm('em', props);
}

export function embed(props) {
  return htmlelm('embed', props);
}

export function fieldset(props) {
  return htmlelm('fieldset', props);
}

export function figcaption(props) {
  return htmlelm('figcaption', props);
}

export function figure(props) {
  return htmlelm('figure', props);
}

export function font(props) {
  return htmlelm('font', props);
}

export function footer(props) {
  return htmlelm('footer', props);
}

export function form(props) {
  return htmlelm('form', props);
}

export function frame(props) {
  return htmlelm('frame', props);
}

export function frameset(props) {
  return htmlelm('frameset', props);
}

export function h1(props) {
  return htmlelm('h1', props);
}

export function h2(props) {
  return htmlelm('h2', props);
}

export function h3(props) {
  return htmlelm('h3', props);
}

export function h4(props) {
  return htmlelm('h4', props);
}

export function h5(props) {
  return htmlelm('h5', props);
}

export function h6(props) {
  return htmlelm('h6', props);
}

export function header(props) {
  return htmlelm('header', props);
}

export function hgroup(props) {
  return htmlelm('hgroup', props);
}

export function hr(props) {
  return htmlelm('hr', props);
}

export function i(props) {
  return htmlelm('i', props);
}

export function iframe(props) {
  return htmlelm('iframe', props);
}

export function img(props) {
  return htmlelm('img', props);
}

export function input(props) {
  return htmlelm('input', props);
}

export function ins(props) {
  return htmlelm('ins', props);
}

export function kbd(props) {
  return htmlelm('kbd', props);
}

export function keygen(props) {
  return htmlelm('keygen', props);
}

export function label(props) {
  return htmlelm('label', props);
}

export function legend(props) {
  return htmlelm('legend', props);
}

export function li(props) {
  return htmlelm('li', props);
}

export function map(props) {
  return htmlelm('map', props);
}

export function mark(props) {
  return htmlelm('mark', props);
}

export function menu(props) {
  return htmlelm('menu', props);
}

export function meter(props) {
  return htmlelm('meter', props);
}

export function nav(props) {
  return htmlelm('nav', props);
}

export function noframes(props) {
  return htmlelm('noframes', props);
}

export function object(props) {
  return htmlelm('object', props);
}

export function ol(props) {
  return htmlelm('ol', props);
}

export function optgroup(props) {
  return htmlelm('optgroup', props);
}

export function option(props) {
  return htmlelm('option', props);
}

export function output(props) {
  return htmlelm('output', props);
}

export function param(props) {
  return htmlelm('param', props);
}

export function pre(props) {
  return htmlelm('pre', props);
}

export function progress(props) {
  return htmlelm('progress', props);
}

export function q(props) {
  return htmlelm('q', props);
}

export function rp(props) {
  return htmlelm('rp', props);
}

export function rt(props) {
  return htmlelm('rt', props);
}

export function ruby(props) {
  return htmlelm('ruby', props);
}

export function s(props) {
  return htmlelm('s', props);
}

export function samp(props) {
  return htmlelm('samp', props);
}

export function section(props) {
  return htmlelm('section', props);
}

export function select(props) {
  return htmlelm('select', props);
}

export function small(props) {
  return htmlelm('small', props);
}

export function source(props) {
  return htmlelm('source', props);
}

export function span(props) {
  return htmlelm('span', props);
}

export function strike(props) {
  return htmlelm('strike', props);
}

export function strong(props) {
  return htmlelm('strong', props);
}

export function sub(props) {
  return htmlelm('sub', props);
}

export function summary(props) {
  return htmlelm('summary', props);
}

export function sup(props) {
  return htmlelm('sup', props);
}

export function table(props) {
  return htmlelm('table', props);
}

export function tbody(props) {
  return htmlelm('tbody', props);
}

export function td(props) {
  return htmlelm('td', props);
}

export function textarea(props) {
  return htmlelm('textarea', props);
}

export function tfoot(props) {
  return htmlelm('tfoot', props);
}

export function th(props) {
  return htmlelm('th', props);
}

export function thead(props) {
  return htmlelm('thead', props);
}

export function time(props) {
  return htmlelm('time', props);
}

export function tr(props) {
  return htmlelm('tr', props);
}

export function tt(props) {
  return htmlelm('tt', props);
}

export function u(props) {
  return htmlelm('u', props);
}

export function ul(props) {
  return htmlelm('ul', props);
}

export function vardom(props) {
  return htmlelm('var', props);
}

export function video(props) {
  return htmlelm('video', props);
}

export function wbr(props) {
  return htmlelm('wbr', props);
}
