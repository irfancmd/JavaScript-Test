function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let minIdx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        // Move the minimum value to i'th position
        if(minIdx !== i) {
            let temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
}

arr = [6 ,5, 4, 3, 25, 10];

selectionSort(arr);

console.log(arr);
