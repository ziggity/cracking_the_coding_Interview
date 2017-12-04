
// Given a string of "baby", the function should return "a"

// First the simple Naive way: hash map:

function firstUniqueChar(str) {
  var counter = {};
  for (i=0; i<str.length; i++){
      var currentChar = str[i];
      if(counter[currentChar]) {
        counter[currentChar]++;
      } else {
        counter[currentChar]=1;
      }
  }
    for (i=0; i<str.length; i++){
       currentChar = str[i];
      if(counter[currentChar]==1) {
        return currentChar;
      }
  }
return false;
}


firstUniqueChar("baby") // "a"

// ES6 way to solve it:


// const firstUniqueChar = (str) => {
//   let arrHelper = str.split('');
//   let hash = arrHelper.reduce((hash, oneChar) => {
//       hash[oneChar] = (hash[oneChar]) ? hash[oneChar]+1 : 1;
//       return hash;
//     }, {});
  
//   for (let i=0; i<str.length; i++) {
//     if (hash[str.charAt(i)] === 1) return str.charAt(i);
//   }
//   }

// firstUniqueChar("rabbitrabbity")

// condensed method chaining es6 way:

const firstUniqueChar = (str) => {
  let hash = str.split('').reduce((hash, oneChar) => {
    hash[oneChar] = (hash[oneChar]) ? hash[oneChar]+1 : 1;
  return hash;
}, {});
  for (let i=0; i<str.length; i++) {
  if (hash[str.charAt(i)] === 1) return str.charAt(i);
  }
}

firstUniqueChar("rabbitrabbity")

// js built in methods way of doing it (although indexOf method still is very slow as it needs to parse the whole string each time you call it)

function firstNonRepeatedCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return null;
}
