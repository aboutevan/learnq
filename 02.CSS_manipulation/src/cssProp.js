function cssProp(el, prop, value) {
  'use strict';

  if (arguments.length === 2) {
    if (typeof prop === 'object') {
      Object.keys(prop).forEach(function(key) {
        return el.style[key] = prop[key];
      })
    } else {
      return window.getComputedStyle(el, null).getPropertyValue(prop);
    }
  }

  return el.style[prop] = value;
}