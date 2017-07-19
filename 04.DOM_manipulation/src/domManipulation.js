var dom = (function(){
  // code goes here
  return {
    remove: function (el) {
      el.remove();
    },
    append: function(target, el) {
      target.appendChild(el);
    },
    after: function(target, el) {
      if (document.body.contains(target)) {
        target.parentNode.insertBefore(el, target.nextSibling);
      }
    },
    prepend: function(target, el) {
      target.prepend(el);
    },
    before: function(target, el) {
      target.parentNode.insertBefore(el, target);
    },
    val: function(target) {
      return target.value;
    }
  }
})();
