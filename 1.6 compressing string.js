    // Generates a compressed string with a trailing letter count
    // Solution #6 from the book.
    // @param {String} str - The string to compress
    // @retuns {Boolean} - a compressed string with a trailing letter count, if the string does not become smaller the orginal string is returned

strComp ('aabbcccccaa'){
var s = string.split('');
var counter = 0;
result = '';

stringArr.each{
if string[i+1] && string [i+1]==string[i];
counter +=1;
else
result += string[i]+counter.to_s;
counter =0;
}
if result.length >= string.length;
return string
else
return result
}


Cleaner answer:

var strComp = function(string) {
  var compressed = '';
  var currChar = '';
  var currCount = '';
  var maxCount = 1;
  for (var i = 0; i < string.length; i++) {
    if (currChar !== string[i]) {
      console.log(currChar, string[i], i);
      compressed = compressed + currChar + currCount;
      maxCount = Math.max(maxCount, currCount);
      currChar = string[i];
      currCount = 1;
    } else {
      currCount++;
    }
  }
  compressed = compressed + currChar + currCount;
  maxCount = Math.max(maxCount, currCount);

  return maxCount === 1 ? string : compressed;
};

// Test
console.log('aaaaaa', strComp('aaaaaa'), 'a6');
console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');
