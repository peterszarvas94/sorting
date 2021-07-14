import React from 'react';

import { useHeights, useHeightsUpdate } from '../context/HeightsContext';

import '../styles/SortButton.css';
import BubbleSort from '../algorithms/BubbleSort';

const SortButton = () => {
    
    const heights = useHeights();
    const modifyHeights = useHeightsUpdate();

    const sortHeights = () => {
        const sorted = BubbleSort(heights);
        modifyHeights([...sorted]);
    }

    return (
        <>
            <button onClick={sortHeights} className='reset'>sorted values</button>
        </>
    );
}

export default SortButton;