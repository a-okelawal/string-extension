'use strict';
var numberInWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
 'seven', 'eight', 'nine'];

String.prototype.hasVowels = function () {
  return /[aeiou]/.test(this) ? true : false;
};

String.prototype.toUpper = function () {
  return this.replace(/([a-z])/g, function (v) {
    return String.fromCharCode(v.charCodeAt(0)-32);
  });
};

String.prototype.toLower = function () {
  return this.replace(/([A-Z])/g, function (v) {
    return String.fromCharCode(v.charCodeAt(0)+32);
  });
};

String.prototype.ucFirst = function () {
  return this.replace(/^[a-z]/, function (v) {
    return v.toUpper();
  });
};

String.prototype.isQuestion = function () {
  return (/(^[^\?]*\?[^\?]*$)(?!\?$)/.test(this)) ? true : false;
};

String.prototype.words = function () {
  return (this).replace(/[^a-zA-Z 0-9]/, '').split(' ');
};

String.prototype.wordCount = function () {
  return ((this).replace(/[^a-zA-Z 0-9]/, '').split(' ')).length;
};

String.prototype.fromCurrency = function () {
  if (/\d/.test(this)) {
    return this.replace(/[^\d]/, '');
  }
};

String.prototype.numberWords = function () {
  return this.replace(/\d/g, function (v) {
    return numberInWords[parseInt(v)] + " ";
  });
};
