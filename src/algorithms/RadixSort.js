const RadixSort = (items) => {
    const result = [[...items]];

    const original = [...items];
    let current = [...original];

    const getMax = array => { // O(n)
        let max = 0
        for (let num of array) {
            max = (max < num.toString().length) ? num.toString().length : max
        }
        return max
    }

    const getPosition = (num,place) => Math.floor(num / Math.pow(10,place)) % 10 // O(1)

    const save = (arr) => {
        const reduced = [];

        for (let i = 0; i < current.length; i++) {
            if (!arr.includes(current[i])) {
                reduced.push(current[i]);
            }
        }

        result.push([...arr, ...reduced]);
    }

    const sort = array => { // O(nk)
        var max = getMax(array)
        for (let i = 0; i < max; i++) {
            let buckets = Array.from({length:10}, () => [])
            for (let j = 0; j < array.length; j++) {
                buckets[getPosition(array[j], i)].push(array[j])
                
                save([].concat(...buckets));
            }
            array = [].concat(...buckets)
            current = [...array];
        }
        return array
    }

    sort(items)
    // console.log(items)

    return result;
}

export default RadixSort;