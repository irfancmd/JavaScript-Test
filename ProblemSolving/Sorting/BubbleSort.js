function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let swapHappened = false;

        for(let j = 1; j < (arr.length - i); j++) {
            if(arr[j - 1] > arr[j]) {
                // Swap the values
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;

                swapHappened = true;
            }
        }

        if(!swapHappened) {
            break;
        }
    }
}

arr = [6 ,5, 4, 3, 25, 10];

bubbleSort(arr);

console.log(arr);
