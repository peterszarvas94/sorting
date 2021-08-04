const RandomValues = (n) => {
    let values = [];
    // for (let i = 0; i < n; i++) {
    //     values.push(Math.floor(Math.random()*200));
    // }

    for (let i = 0; i < n; i++) {
        values.push(i+1);
    }

    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random()*n);

            let temp = values[randomIndex];
            values[randomIndex] = values[i];
            values[i] = temp;
        
    }

    return values;
}   

export default RandomValues;