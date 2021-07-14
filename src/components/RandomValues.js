const RandomValues = (n) => {
    let values = [];
    for (let i = 0; i < n; i++) {
        values.push(Math.random()*20);
    }

    return values;
}   

export default RandomValues;