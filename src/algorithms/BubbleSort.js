const BubbleSort = (arr) => {

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                
            }
        }
        result.push([...arr]);
    }

    return result;
}

export default BubbleSort;