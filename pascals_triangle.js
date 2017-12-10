// Pascal's triangle
From Wikipedia, the free encyclopedia

In Pascal's triangle, each number is the sum of the two numbers directly above it.
In mathematics, Pascal's triangle is a triangular array of the binomial coefficients. In much of the Western world, it is named after French mathematician Blaise Pascal, although other mathematicians studied it centuries before him in India,[1] Persia (Iran), China, Germany, and Italy.[2]
The rows of Pascal's triangle are conventionally enumerated starting with row n = 0 at the top (the 0th row). The entries in each row are numbered from the left beginning with k = 0 and are usually staggered relative to the numbers in the adjacent rows. The triangle may be constructed in the following manner: In row 0 (the topmost row), there is a unique nonzero entry 1. Each entry of each subsequent row is constructed by adding the number above and to the left with the number above and to the right, treating blank entries as 0. For example, the initial number in the first (or any other) row is 1 (the sum of 0 and 1), whereas the numbers 1 and 3 in the third row are added to produce the number 4 in the fourth row.

---------------------------------------------------------------------------------------

Thought process on how to implement this function into js;

1. pass in a num of desired row as an argument, say 1 for instance. The return value will be 1. 20 should return 


Here's the working code:

function pascal(n){

var result = [];                        // build a container to store pascal's triangle
    result[0] = [1];                    // first index and last index will always be 1
    result[1] = [1,1];                  // last index 1, let's hard code that now
for (var row = 2; row < n; row++){      // start the loop at 2 since we don't need to build first one already made
    result[row] = [1];                 
    for (var col = 1; col <= row -1; col++){                   // let's build the columns now we have our rows setup. 
        result[row][col] = result[row-1][col] + result[row-1][col-1];    // 2d array we are accessing here, col is being built
        result[row].push(1); // adding one to the row at the end to ensure we keep our pascal's rule in check. 
    }

}
return result;

}
function callPascal(num){
    var n = num;
    for (var i = 0; i < pascal(n).length; i++){ // looping through pascal triangle
        console.log(pasc(n)[i]+"<br>"); // 
    }
    return;
}
callPascal(20);

Here's the output of pasc(20);

1<br>
1,1<br>
1,2,1<br>
1,3,3,1<br>
1,4,6,4,1<br>
1,5,10,10,5,1<br>
1,6,15,20,15,6,1<br>
1,7,21,35,35,21,7,1<br>
1,8,28,56,70,56,28,8,1<br>
1,9,36,84,126,126,84,36,9,1<br>
1,10,45,120,210,252,210,120,45,10,1<br>
1,11,55,165,330,462,462,330,165,55,11,1<br>
1,12,66,220,495,792,924,792,495,220,66,12,1<br>
1,13,78,286,715,1287,1716,1716,1287,715,286,78,13,1<br>
1,14,91,364,1001,2002,3003,3432,3003,2002,1001,364,91,14,1<br>
1,15,105,455,1365,3003,5005,6435,6435,5005,3003,1365,455,105,15,1<br>
1,16,120,560,1820,4368,8008,11440,12870,11440,8008,4368,1820,560,120,16,1<br>
1,17,136,680,2380,6188,12376,19448,24310,24310,19448,12376,6188,2380,680,136,17,1<br>
1,18,153,816,3060,8568,18564,31824,43758,48620,43758,31824,18564,8568,3060,816,153,18,1<br>
1,19,171,969,3876,11628,27132,50388,75582,92378,92378,75582,50388,27132,11628,3876,969,171,19,1<br>
