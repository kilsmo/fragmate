let renderListeners: RenderListener[] = [];
let scopeStack: Array<string>;

/**
 * A virtual dom element.
 */
export interface VElm {
  name: string;
  attributes: Array<string>;
  children: Array<VElm>;
}

function toDom(elm: VElm): HTMLElement {
  const htmlElms: Array<HTMLElement> = elm.children.map(
    (c): HTMLElement => {
      return toDom(c);
    }
  );
  const helm: HTMLElement = document.createElement(elm.name);
  htmlElms.forEach((e) => {
    helm.appendChild(e);
  });
  return helm;
}

export interface RenderFunc {
  (props: object): VElm;
}

export interface AfterFunc {
  (elm: HTMLElement): void;
}

export interface AlienFunc {
  (elm: HTMLElement, props: object): void;
}

export interface CtorFunc {
  (props: object): HTMLElement;
}

export interface DtorFunc {
  (elm: HTMLElement): void;
}

export interface RenderCb {
  (): void;
}

export interface ScopeCb {
  (id: string): void;
}

export abstract class RenderListener {
  abstract renderStarted: RenderCb;
  abstract renderEnded: RenderCb;
  abstract scopeOpened: ScopeCb;
  abstract scopeClosed: ScopeCb;
}

export function render(
  fn: RenderFunc,
  props: object,
  rootElm: HTMLElement
): void {
  renderListeners.forEach((listener) => {
    listener.renderStarted();
  });

  scopeStack = [];
  const velm = fn(props);
  const elm = toDom(velm);
  rootElm.appendChild(elm);

  renderListeners.forEach((listener) => {
    listener.renderEnded();
  });
}

export function scope(id: string, fn: RenderFunc, props: object): VElm {
  scopeStack.push(id);

  renderListeners.forEach((listener) => {
    listener.scopeOpened(id);
  });

  const elm = fn(props);

  renderListeners.forEach((listener) => {
    listener.scopeClosed(id);
  });

  scopeStack.pop();

  return elm;
}

export function after(fn: RenderFunc, props: object, afterFn: AfterFunc): VElm {
  // TODO: implement the calling of afterFn.
  console.log(afterFn);
  return fn(props);
}

export function alien(
  update: AlienFunc,
  props: object,
  ctor: CtorFunc,
  dtor: DtorFunc
): HTMLElement {
  console.log(dtor);
  // TODO: implement alien the right way.
  return ctor(props);
}

export function addRenderListener(listener: RenderListener): void {
  renderListeners.push(listener);
}

export function removeRenderListener(listener: RenderListener): void {
  renderListeners = renderListeners.filter((l) => l !== listener);
}
