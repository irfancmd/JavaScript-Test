// Searches an element in a sorted array in logarithmic time complexity
function binarySearch(arr, left, right, value) {

    if(left > right) {
        return -1;
    }

    mid = left + Math.floor((right - left)/2);

    if (arr[mid] < value){
        return binarySearch(arr, mid + 1, right, value);
    } else if(arr[mid] > value) {
        return binarySearch(arr, left, mid - 1, value);
    } else {
        return mid;
    }
}

arr = [2, 4, 5, 6, 10, 15, 23, 25];
console.log(binarySearch(arr, 0, arr.length-1, 5));