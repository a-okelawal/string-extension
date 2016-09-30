'use strict';

String.prototype.hasVowels = function () {
  return /[aeiou]/.test(this) ? true : false;
};
