( function () {
  'use strict';
  var strExt = require('../src/stringExt.js');

  describe ('hasVowels should', function () {
    it('return true if vowel is found in string and false otherwise', function () {
      expect(strExt.hasVowels('abani')).toBe(true);
      expect(strExt.hasVowels('lcd')).toBe(false);
    });
  });

  describe ('toUpper should', function () {
    it('return the string with all uppercase letters.', function () {
      expect(strExt.toUpper('abani')).toBe('ABANI');
      expect(strExt.toUpper('lcd')).toBe('LCD');
    });
  });

  describe ('toLower should', function () {
    it('return the string with all lowercase letters.', function () {
      expect(strExt.toLower('aBAni')).toBe('abani');
      expect(strExt.toLower('lCD')).toBe('lcd');
    });
  });

  describe ('ucFirst should', function () {
    it('return the string with the first letter in uppercase.', function () {
      expect(strExt.ucFirst('abani')).toBe('Abani');
      expect(strExt.ucFirst('lcd')).toBe('Lcd');
    });
  });

  describe ('isQuestion should', function () {
    it('return true if a question and false otherwise.', function () {
      expect(strExt.isQuestion('abani?')).toBe(true);
      expect(strExt.isQuestion('lcd')).toBe(false);
    });
  });

  describe ('words should', function () {
    it('return a list of words in a string.', function () {
      expect(strExt.words('abani is a boy')).toBe(['Abani', 'is', 'a', 'boy']);
    });
  });

  describe ('wordCount should', function () {
    it('return the number of words in a string.', function () {
      expect(strExt.wordCount('abani is a boy')).toEqual(4);
    });
  });

  describe ('toCurrency should', function () {
    it('return a currency representation of string.', function () {
      expect(strExt.toCurrency('111111.11')).toBe('111,111.11');
    });
  });

  describe ('fromCurrency should', function () {
    it('return a number representation of string.', function () {
      expect(strExt.fromCurrency('111,111.11')).toBe('111111.11');
    });
  });

  describe ('inverseCase should', function () {
    it('return an inverse of the cases in the string.', function () {
      expect(strExt.inverseCase('My Food')).toBe('mY fOOD');
    });
  });

  describe ('alternatingCase should', function () {
    it('return the letters of the string in alternating cases.', function () {
      expect(strExt.alternatingCase('Tolulope')).toBe('tOlUlOpE');
    });
  });

  describe ('getMiddle should', function () {
    it('return the characters in the middle of the string.', function () {
      expect(strExt.getMiddle('read')).toBe('ea');
      expect(strExt.getMiddle('reads')).toBe('a');
    });
  });

  describe ('numberWords should', function () {
    it('return the word equivalent of the numbers in the string.', function () {
      expect(strExt.numberWords('34')).toBe('three four');
    });
  });

  describe ('isDigit should', function () {
    it('return true if the string is a single digit.', function () {
      expect(strExt.isDigit('7')).toBe(true);
      expect(strExt.isDigit('567')).toBe(false);
    });
  });

  describe ('doubleCheck should', function () {
    it('return true if the string contains double characters.', function () {
      expect(strExt.doubleCheck('letting tomi')).toBe(true);
      expect(strExt.doubleCheck('let her')).toBe(false);
    });
  });

}());
