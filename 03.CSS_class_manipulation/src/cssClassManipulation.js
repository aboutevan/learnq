var cssClass = (function() {
  'use strict';

  // code goes here
  return {
    add: function(el, className) {
      el.classList.add(className);
      // el.className += ' ' + className;
    },
    remove: function(el, className) {
      el.classList.remove(className);
    },
    toggle: function(el, className) {
      el.classList.toggle(className);
    },
    has:function(el, className) {
      if (el.classList.contains(className)) return true;
      return false;
    }
  }
})();

