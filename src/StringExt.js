'use strict';

String.prototype.hasVowels = function () {
  return /[aeiou]/.test(this) ? true : false;
};

String.prototype.toUpper = function () {
  return this.replace(/([a-z])/g, function (v) {
    console.log(typeof v);
    return String.fromCharCode(v.charCodeAt(0)-32);
  });
};
