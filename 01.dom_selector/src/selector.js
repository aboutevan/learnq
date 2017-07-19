var domSelector = function(selectors) {
  'use strict';
  var el = document.querySelector(selectors);
  return el === null ? [] : [el];
  //code goes here
};