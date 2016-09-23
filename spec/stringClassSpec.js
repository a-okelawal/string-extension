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

}());
