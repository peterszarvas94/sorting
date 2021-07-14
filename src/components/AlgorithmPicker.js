import React from 'react';

import '../styles/AlgorithmPicker.css';

const AlgorithmPicker = () => {

    const sort = () => {
        
    }

    return (
        <>
            <select>
                <option>Bubble sort</option>
                <option>Quicksort</option>
                <option>Merge sort</option>
                <option>Radix sort</option>
                <option>Insertion sort</option>
            </select>
            <button onClick={sort} className='sort'>sort</button>
        </>
    );
}

export default AlgorithmPicker;