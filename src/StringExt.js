'use strict';
let numberInWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
 'seven', 'eight', 'nine'];

String.prototype.hasVowels = function () {
  return /[aeiou]/.test(this);
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
  return (/(^[^\?]*\?[^\?]*$)(?!\?$)/.test(this));
};

String.prototype.words = function () {
  return (this).replace(/[^a-zA-Z 0-9]/, '').split(' ');
};

String.prototype.wordCount = function () {
  return (this.words()).length;
};

String.prototype.fromCurrency = function () {
  return /^\d+(\,\d+\.\d*)?$/g.test(this) ? this.replace(/[^\d]/, '') :
  'String is not in digits.';
};

String.prototype.numberWords = function () {
  return this.replace(/\d/g, function (v) {
    return numberInWords[parseInt(v)] + ' ';
  });
};

String.prototype.inverseCase = function () {
  return this.replace(/[a-zA-z]/g, function (v) {
    return /[a-z]/.test(v) ? v.toUpper() : v.toLower();
  });
};

String.prototype.alternatingCase = function () {
  return this.replace(/[a-zA-Z]/g, function (cha, index) {
    return (index%2) === 0 ? cha.toLower() : cha.toUpper();
  });
};

String.prototype.isDigit = function () {
  return /^[\d{1}]$/.test(this);
};

String.prototype.doubleCheck = function () {
  return /(.)\1/.test(this);
};

String.prototype.getMiddle = function () {
  let total = this.length;
  return (total%2) === 0 ? this.charAt((total/2)-1) +
  this.charAt(total/2) : this.charAt(total/2);
};

String.prototype.toCurrency = function () {
  return /^\d+(\.\d*)?$/g.test(this) ? this.replace(/(\d+)(?=\.)/g, function (v) {
    return v.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  }) : 'String is not in digits.';
};
