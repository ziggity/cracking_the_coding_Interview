var array = [0, 99, 9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
function bubbleSort(array) {
  for(var i=0; i<array.length; i++){
    for(var j=1; j<array.length; j++){
      if(array[j-1] > array[j]){
        swap(array, j-1, j);
      }
    }
  }
  return array;
}

console.log(bubbleSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// very slow run time with nested for loops, polynomial time. 

-----------------------------------------------------------------------------------------

Better way to implement the code:

function bubbleSort(array) {
  var swapped;
  do {
    swapped = false;
    for(var i = 0; i < array.length; i++) {
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return array;
}
