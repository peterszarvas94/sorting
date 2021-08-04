import React from 'react';

import { useHeightsUpdate } from '../context/HeightsContext';
import RandomValues from './RandomValues';
import { NumberOfSticks } from '../default/Defaults';
import { Button } from 'react-bootstrap';

const RandomizeButton = () => {
    
    const modifyHeights = useHeightsUpdate();

    const toggleReseted = () => {
        modifyHeights(RandomValues(NumberOfSticks()));
    }

    return (
        <>  
            <Button variant="primary" onClick={toggleReseted} id='randomize' className='randomize'>Randomize</Button>
        </>
    );
}

export default RandomizeButton;