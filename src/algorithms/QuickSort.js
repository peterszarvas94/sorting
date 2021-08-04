const QuickSort = (items) => {

    const result = [[...items]];

    const swap = (arr, leftIndex, rightIndex) => {
        const temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
        
        result.push([...arr]);
    }
    
    const partition = (arr, leftIndex, rightIndex) =>  {
        const pivot = arr[Math.floor((rightIndex + leftIndex) / 2)];
        let i = leftIndex;
        let j = rightIndex;

        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            
            if (i <= j) {
                swap(arr, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        
        return i;
    }

    const sort = (arr, leftIndex, rightIndex) => {
        let index;
    
        if (arr.length > 1) {
            index = partition(arr, leftIndex, rightIndex); //index returned from partition
            if (leftIndex < index - 1) { //more elements on the left side of the pivot
                sort(arr, leftIndex, index - 1);
            }
            if (index < rightIndex) { //more elements on the right side of the pivot
                sort(arr, index, rightIndex);
            }
        }
    }

    sort(items, 0, items.length -1);

    return result;
}

// exports.QuickSort = QuickSort;
export default QuickSort;