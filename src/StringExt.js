'use strict';
let numberInWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
 'seven', 'eight', 'nine'];

/*
* These functions all work as extensions of the String class.
*
*This function takes in a string and returns true if a vowel is present
*and false otherwise.
*/
String.prototype.hasVowels = function () {
  //The Regex pattern checks if a,e,i,o or u are in the string
  return /[aeiou]/.test(this);
};

//This function takes in a string and returns it in capital letters
String.prototype.toUpper = function () {
  //The Regex pattern checks for small letters a-z in the string
  return this.replace(/([a-z])/g, function (v) {
    return String.fromCharCode(v.charCodeAt(0)-32);
  });
};

//This function takes in a string and returns it in lowercase letters
String.prototype.toLower = function () {
  //The Regex pattern checks for capital letters A-Z in the string
  return this.replace(/([A-Z])/g, function (v) {
    return String.fromCharCode(v.charCodeAt(0)+32);
  });
};

//This function takes in a string and returns it with the first letter as capital
String.prototype.ucFirst = function () {
  //The Regex pattern checks if the first letter is in lowercase.
  return this.replace(/^[a-z]/, function (v) {
    return v.toUpper();
  });
};

/*
*This function takes in a string and returns true if it is a question
*and false otherwise.
*/
String.prototype.isQuestion = function () {
  /*
  *The Regex pattern checks if there is a question mark at the end
  */
  return /\?$/g.test(this);
};

//This function takes in a string and returns an array of the words in it
String.prototype.words = function () {
  //The Regex pattern checks for anything that isn't a number or letter
  return ((this).replace(/[^a-zA-Z]+/g, ' ').split(' ')).filter(Boolean);
};

//This function takes in a string and returns the number of words in it
String.prototype.wordCount = function () {
  return (this.words()).length;
};

/*
*This function takes in the currency format of numbers and
*returns it as a simple number
*/
String.prototype.fromCurrency = function () {
  //The first Regex pattern checks for numbers and commas before the .
  //The second Regex pattern checks for characters that are not strings
  return /^\d+(\,*|\d*){0,}\.{0,1}\d*$/g.test(this) ? this.replace(/[^\d+.$]/g, '') :
  'String is not in digits.';
};

//This function takes in numbers and returns the word equivalent of the numbers
String.prototype.numberWords = function () {
  //The Regex pattern checks for digits
  return this.replace(/\d/g, function (v) {
    return numberInWords[parseInt(v)] + ' ';
  });
};

/*
*This function takes in a string and returns it with
*the inverse case for each letter
*/
String.prototype.inverseCase = function () {
  //The Regex pattern checks for letters in all cases
  return this.replace(/[a-zA-z]/g, function (v) {
    //The Regex pattern checks for small letters
    return /[a-z]/.test(v) ? v.toUpper() : v.toLower();
  });
};

//This function returns the letters of the string in alternating cases.
String.prototype.alternatingCase = function () {
  //The Regex pattern checks for letters in all cases
  return this.replace(/[a-zA-Z]/g, function (cha, index) {
    return (index%2) === 0 ? cha.toLower() : cha.toUpper();
  });
};

//This function returns true if the string is a single digit.
String.prototype.isDigit = function () {
  //The Regex pattern checks if string consists of 1 digit
  return /^[\d{1}]$/.test(this);
};

//This function returns true if the string contains double characters.
String.prototype.doubleCheck = function () {
  //The Regex pattern checks for characters, except new line, preceeding each other
  return /(.)\1/.test(this);
};

//This function returns the middle of the string
String.prototype.getMiddle = function () {
  let total = this.length;
  return (total%2) === 0 ? this.charAt((total/2)-1) +
  this.charAt(total/2) : this.charAt(total/2);
};

//This function returns a currency representation of string.
String.prototype.toCurrency = function () {
  //The first and second Regex pattern checks for numbers before the '.'
  //The third checks for digits in 3's that are followed by another digit
  return /^\d+(\.\d*)?$/g.test(this) ? this.replace(/(\d+)(.)/, function (v) {
    return v.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  }) : 'String is not in digits.';
};
