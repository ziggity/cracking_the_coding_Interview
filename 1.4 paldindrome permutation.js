Palindrome Permutation:
Best solution:
var permutation = function (stringOne, stringTwo)
{
  if (stringOne.length !== stringTwo.length) {
    return false;
  }else{
  var sortedStringOne = str.split("").sort().join("");
  var sortedStrinTwo = str.split("").sort().join("");
  return sortedStringOne === sortedStringTwo;
  }
};

// Go through the array check pair by pair for pairs
// Or make a dictionary, and count each letter individually

var pali = {};
for (var i=0; i<s.length; i++)
