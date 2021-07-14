import React from 'react';

import { useHeightsUpdate } from '../context/HeightsContext';
import RandomValues from './RandomValues';

import '../styles/ResetButton.css';

const ResetButton = () => {
    
    const modifyHeights = useHeightsUpdate();

    const toggleReseted = () => {
        modifyHeights(RandomValues(40));
    }

    return (
        <>
            <button onClick={toggleReseted} className='reset'>random values</button>
        </>
    );
}

export default ResetButton;