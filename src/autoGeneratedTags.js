// Helper function to create a DOM element for a given tag
const createElement = (tag) => (attributes = {}, children = []) => {
  const element = document.createElement(tag);

  // Set attributes
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }

  // Append children
  for (const child of children) {
    if (typeof child === "string" || typeof child === "number") {
      element.appendChild(document.createTextNode(String(child)));
    } else if (child instanceof Node) {
      element.appendChild(child);
    } else {
      console.error("Invalid child type:", child);
    }
  }

  return element;
};

// List of all HTML element tags
const htmlTags = [
  "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote",
  "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist",
  "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption",
  "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr",
  "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map",
  "mark", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p",
  "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section",
  "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table",
  "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u",
  "ul", "video", "wbr",
];

// Generate a map of functions for all HTML tags
const elements = Object.fromEntries(
  htmlTags.map((tag) => [tag, createElement(tag)])
);

// Export each tag as a named export
export const {
  a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote,
  body, br, button, canvas, caption, cite, code, col, colgroup, data, datalist,
  dd, del, details, dfn, dialog, div, dl, dt, em, embed, fieldset, figcaption,
  figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html,
  i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark,
  meta, meter, nav, noscript, object, ol, optgroup, option, output, p, param,
  picture, pre, progress, q, rp, rt, ruby, s, samp, script, section, select,
  small, source, span, strong, style, sub, summary, sup, svg, table, tbody, td,
  template, textarea, tfoot, th, thead, time, title, tr, track, u, ul,
  video, wbr,
} = elements;

// Default export for convenience
export default elements;
