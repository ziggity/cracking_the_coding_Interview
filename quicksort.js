

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Proper way to do a quick sort: In place! Thank you Phong for your assistance with this code! 

// 
var quickSort = (array, low = 0, high = array.length-1) => {
  if (low > high) return array;
  if (array.length <= 1) return array;
    var pivot = partition(array, low, high);
    quickSort(array, pivot+1, high)
    quickSort(array, low, pivot-1)
  return array;
}

//

var partition = (array, low, high) => {
  if (array.length <= 1 && low > high) return array;
    var pivot = Math.floor(Math.random()*(high-low)) + low;
    swap(array, pivot, high);
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
