const InsertionSort = (items) => {
    const result = [[...items]];

    const sort = (arr) => {
        const length = arr.length;
        for (let i = 1; i < length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
            result.push([...arr]);
        }
        return arr;
    };

    sort(items);

    return result;
}

export default InsertionSort;