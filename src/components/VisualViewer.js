import React from 'react';

import { useHeights } from '../context/HeightsContext';
import Stick from './Stick';

import '../styles/VisualViewer.css';

const VisualViewer = () => {

    const heights = useHeights();

    return (
        <div className='visual_parent'>
            <div className='visual_child'>
                { heights.map((el, index)=> {
                    return <Stick id={index} height={el} key={index}/>
                }) }
            </div>
        </div>
    );
}

export default VisualViewer;