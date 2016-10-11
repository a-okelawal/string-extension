# inverted-index
This is a javascript library that extends the String class.

## Requirements
The following are required for use:

- Clone or Download and Unzip into a folder.
- Open the index.html to see how each method works.
- To use in a project, import 'StringExt.js'

## How To Use
The File StringExt.js contains a number of Functions under the String class. they are:

- **hasVowels (typeof Boolean)**: Returns true if the string contains vowels. This method must implement Regular Expression.

- **toUpper (typeof String)**: Returns the String in question but with all characters in upper cases as applicable. This method should be implemented without the use of the toUpperCase internal methods.

- **toLower (typeof String)**: Returns the String in question but with all characters in their lower cases as applicable. This method should be implemented without the use of the toLowerCase internal methods.

- **ucFirst (typeof String)**: Returns the String in question but changes the First Character to an Upper case. Make use of your toUpper method above to implement this method or a one-liner.

- **isQuestion (typeof Boolean)**: Return true if the string is a question (ending with a question mark). This method must implement Regular Expression.

- **words (typeof Object, instanceof Array)**: Returns a list of the words in the string, as an Array. This method must implement Regular Expression.

- **wordCount (typeof Number)**: Returns the number of words in the string. It must make use of the words method above.

- **toCurrency (typeof String)**: Returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11.

- **fromCurrency (typeof Number)**: Returns a number representation of the Currency String e.g 11,111.11 should return 11111.11

- **inverseCase (typeof String)**: Returns each letter in the string as an inverse of its current case e.g Mr. Ben should return mR. bEN.

- **alternatingCase (typeof String)**: Returns the letters in alternating cases. It must start with a lower case e.g Onomatopoeia should return oNoMaToPoEiA.

- **getMiddle (typeof String)**: Returns the character(s) in the middle of the string e.g read should return ea and reads should return a.

- **numberWords (typeof String)**: Returns the numbers in words e.g 325 should return three two five.

- **isDigit (typeof Boolean)**: Returns true if the string is a digit(one number) e.g 3 should return true and 34 should return false. This method must implement Regular Expression.

- **doubleCheck (typeof Boolean)**: Returns true if a string contains double characters(including whitespace character) e.g aa, !!, should return true.
