function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        // Look where ith element is supposed to go in the sorted half
        let correctPosition = i;

        for(let j = i - 1; j >= 0; j--) {
            if(arr[j] > arr[i]) {
                correctPosition = j;
                break;
            }
        }

        // Then put the element in the correct position
        if(correctPosition !== i) {
            let temp = arr[correctPosition];
            arr[correctPosition] = arr[i];
            arr[i] = temp;
        }
    }
}

arr = [6 ,5, 4, 3, 25, 10];

insertionSort(arr);

console.log(arr);
