export function qs(selector:string, scope:Element):Element {
  return (scope || document).querySelector(selector);
}

export function create(parent:Element, tagName:string, options:any):Element {
  var el:any = document.createElement(tagName);
  if (parent) {
    parent.appendChild(el);
  }
  if (options) {
    for (var option in options) {
      if (options.hasOwnProperty(option)) {
        el[option] = options[option];
      }
    }
  }
  return el;
}

export function on(element:Element, event:string, handler:EventListenerObject):void {
  element.addEventListener(event, handler);
}

export function off(element:Element, event:string, handler:EventListenerObject):void {
  element.removeEventListener(event, handler);
}
