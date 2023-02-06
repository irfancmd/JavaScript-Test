function merge(leftSortedArr, rightSortedArr) {
    let mergedArr = [];

    let i = 0;
    let j = 0;

    while((i < leftSortedArr.length) && (j < rightSortedArr.length)) {
        if(leftSortedArr[i] < rightSortedArr[j]) {
            mergedArr.push(leftSortedArr[i]);
            i++;
        } else {
            mergedArr.push(rightSortedArr[j]);
            j++;
        }
    }

    while(i < leftSortedArr.length) {
            mergedArr.push(leftSortedArr[i]);
            i++;
    }

    while(j < rightSortedArr.length) {
            mergedArr.push(rightSortedArr[j]);
            j++;
    }

    return mergedArr;
}


function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }

    let left = 0;
    let right = arr.length - 1;
    let mid = left + Math.ceil((right - left) / 2);

    let leftSortedSubArray = mergeSort(arr.slice(left, mid));
    let rightSortedSubArray = mergeSort(arr.slice(mid, right + 1));
    
    let merged = merge(leftSortedSubArray, rightSortedSubArray);

    return merged;
}

arr = [6 ,5, 4, 3, 25, 10];

arr_sorted = mergeSort(arr);

console.log(arr_sorted);
