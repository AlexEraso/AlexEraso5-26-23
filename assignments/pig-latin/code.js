// A new method you will probably want to use.
//
// If s is a string:
//
//  s.search(/[aeiou]/) returns the index in s of the first vowel.
//
// For instance
//
//  const s = 'phone';
//
//  s.search(/[aeiou]/) returns 2
//
// The funny syntax /[aeiou]/ is called a "regular expression". We'll learn
// about them in more detail later.
//
// To write the advancedPigLatin function you will want to know about a new
// operator called the "ternary operator". (It's called this because it has
// three operands.)
//
// It looks like:
//
//  booleanValue ? value1 : value2
//
// And it evaluates to value1 is booleanValue is true and value2 if it is false.
//
// For example:
//
//  x === 0 ? "Zero" : "Not zero"
//
// will evaluate to either "Zero" or "Not zero" depending on whether x === 0.
//
// Feel free to play around in the REPL to make sure you understand how this
// operator works.

//s.search (/[aeiou]/) returns 2 

function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "way";
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return newStr;
    }
}



