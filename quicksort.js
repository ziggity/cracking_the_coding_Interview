

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Proper way to do a quick sort: In place! Thank you Phong for your assistance with this code! This method will create the cleanest code possible without bogging down the memory with multiple variables

// set the parameters - low is index 0, high is the last index in array
var quickSort = (array, low = 0, high = array.length-1) => {
  if (low > high) return array; // if 0 is greater than array means the array is empty and return break out of function
  if (array.length <= 1) return array; // if array has 1 or less digits no point in sorting it...
    var pivot = partition(array, low, high); // create a pivot point, using the partition method 
    quickSort(array, pivot+1, high) // call quickSort with a low of pivot+1
    quickSort(array, low, pivot-1) // call quickSort with a high of pivot-1 
  return array;
}

//

var partition = (array, low, high) => { 
  if (array.length <= 1 && low > high) return array;
    var pivot = Math.floor(Math.random()*(high-low)) + low; //
    swap(array, pivot, high); // call swap method
    pivot = high; 
    var i = low;
    while (low < high) {
      if (array[low] <= array[pivot]) {
      swap(array, low, i);
      i++;
      }
      low++;
      }
      swap(array, i, pivot);
      return i;
}

var swap = (array, i, j) => {
  var t = array[i]
  array[i] = array[j];
  array[j] = t;
}

var arr1 = [5,3,2,1];

console.log(quickSort(arr1)) // [1,2,3,5]
