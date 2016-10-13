'use strict';

describe ('hasVowels should', function () {
  it ('return true if vowel is found in string and false otherwise', function () {
    expect('abani'.hasVowels()).toBe(true);
    expect('lcd'.hasVowels()).toBe(false);
  });
});

describe ('toUpper should', function () {
  it ('return the string with all uppercase letters.', function () {
    expect('abani'.toUpper()).toBe('ABANI');
    expect('lcd'.toUpper()).toBe('LCD');
  });
});

describe ('toLower should', function () {
  it ('return the string with all lowercase letters.', function () {
    expect('aBAni'.toLower()).toBe('abani');
    expect('lCD'.toLower()).toBe('lcd');
  });
});

describe ('ucFirst should', function () {
  it ('return the string with the first letter in uppercase.', function () {
    expect('abani'.ucFirst()).toBe('Abani');
    expect('Lcd'.ucFirst()).toBe('Lcd');
  });
});

describe ('isQuestion should', function () {
  it ('return true if a question and false otherwise.', function () {
    expect('abani?'.isQuestion()).toBe(true);
    expect('lcd'.isQuestion()).toBe(false);
    expect('can it have? multiple questions?'.isQuestion()).toBe(true);
  });
});

describe ('words should', function () {
  it ('return a list of words in a string.', function () {
    expect('Abani is a boy'.words()).toEqual(['Abani', 'is', 'a', 'boy']);
    expect('Abani is a boy 24 times'.words()).toEqual(['Abani', 'is', 'a', 'boy', 'times']);
  });
});

describe ('wordCount should', function () {
  it ('return the number of words in a string.', function () {
    expect('abani is a boy times'.wordCount()).toEqual(5);
    expect('abani is a boy 24 times'.wordCount()).toEqual(5);
  });
});

describe ('toCurrency should', function () {
  it ('return a currency representation of string.', function () {
    expect('111111.11'.toCurrency()).toBe('111,111.11');
    expect('111111.1133'.toCurrency()).toBe('111,111.1133');
    expect('1RF,!!!.11'.fromCurrency()).toEqual('String is not in digits.');
    expect('111111.11FF'.toCurrency()).toBe('String is not in digits.');
  });
});

describe ('fromCurrency should', function () {
  it ('return a number representation of string.', function () {
    expect('111,111.11'.fromCurrency()).toEqual('111111.11');
    expect('111,111.1144'.fromCurrency()).toEqual('111111.1144');
    expect('1RF,!!!.1144'.fromCurrency()).toEqual('String is not in digits.');
    expect('1RF,!!!.11F44'.fromCurrency()).toEqual('String is not in digits.');
  });
});

describe ('inverseCase should', function () {
  it ('return an inverse of the cases in the string.', function () {
    expect('My Food'.inverseCase()).toBe('mY fOOD');
    expect('My 34 Food'.inverseCase()).toBe('mY 34 fOOD');
  });
});

describe ('alternatingCase should', function () {
  it ('return the letters of the string in alternating cases.', function () {
    expect('Tolulope'.alternatingCase()).toBe('tOlUlOpE');
  });
});

describe ('getMiddle should', function () {
  it ('return the characters in the middle of the string.', function () {
    expect('read'.getMiddle()).toBe('ea');
    expect('reads'.getMiddle()).toBe('a');
  });
});

describe ('numberWords should', function () {
  it ('return the word equivalent of the numbers in the string.', function () {
    expect('34'.numberWords()).toBe('three four ');
  });
});

describe ('isDigit should', function () {
  it ('return true if the string is a single digit.', function () {
    expect('7'.isDigit()).toBe(true);
    expect('567'.isDigit()).toBe(false);
    expect('56f7'.isDigit()).toBe(false);
    expect('H'.isDigit()).toBe(false);
  });
});

describe ('doubleCheck should', function () {
  it ('return true if the string contains double characters.', function () {
    expect('letting tomi'.doubleCheck()).toBe(true);
    expect('let her'.doubleCheck()).toBe(false);
    expect('let  her'.doubleCheck()).toBe(true);
  });
});
