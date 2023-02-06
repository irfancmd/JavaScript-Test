function pivot_helper(arr, start = 0, end = (arr.length - 1)) {
    // We'll treat the first element as pivot
    let pivot = arr[start];
    
    let i = start;
    for(let j = i + 1; j <= end; j++) {
        if(arr[j] < pivot) {
            // If current element < pivot, move it to the front of
            // the array
            i++;

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // After all elements less than pivot has been moved to
    // the front, swap ith element with the pivot
    let temp = arr[i];
    arr[i] = pivot;
    arr[start] = temp;

    // Return the index of the pivot which will be the ith index
    return i;
}

function quickSort(arr, start = 0, end = (arr.length - 1)) {
    if(start >= end) {
        return;
    }

    let pivotIndex = pivot_helper(arr, start, end);

    quickSort(arr, start, pivotIndex);
    quickSort(arr, pivotIndex + 1, end);
}

let arr = [4, 8, 2, 1, 5, 7, 8, 3];

quickSort(arr);

console.log(arr);