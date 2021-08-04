import React from 'react';

import '../styles/AlgorithmPicker.css';

const AlgorithmPicker = () => {
    return (
        <>
            <select className='form-select picker' id='picker'>
                <option>Bubble sort</option>
                <option>Quicksort</option>
                <option>Merge sort</option>
                <option>Radix sort</option>
                <option>Insertion sort</option>
                <option>Selection sort</option>
            </select>
        </>
    );
}

export default AlgorithmPicker;