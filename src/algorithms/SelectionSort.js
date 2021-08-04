const SelectionSort = (items) => {
    const result = [[...items]];

    const sort = (arr) => {
        const length = arr.length;
        for (let i = 0; i < length; i++) {
            let min = i;
            for (let j = i + 1; j < length; j++) {
                if (arr[min] > arr[j]) {
                    min = j;
                }
            }
            if (min !== i) {
                let tmp = arr[i];
                arr[i] = arr[min];
                arr[min] = tmp;
            }

            result.push([...arr]);
        }
        return arr;
    }

    sort(items);

    return result;
}

export default SelectionSort;