import React, { useState, useEffect } from 'react';

import { useReseted, useResetedUpdate } from '../context/ResetedContext';
import { useHeights } from '../context/HeightsContext';

import Stick from './Stick';
import RandomValues from './RandomValues';

import '../styles/VisualViewer.css';

const VisualViewer = () => {

    const reseted = useReseted();
    const toggleReseted = useResetedUpdate();
    const height = useHeights();

    const [values, setValues] = useState([]);

    useEffect(() => {
        const drawCols = () => {

            height.setHeights(RandomValues(40));

            setValues(height.heights.map((el, index)=> {
                return <Stick id={index} height={el} key={index}/>
            }));
        }

        if (!reseted) {
            drawCols();
            toggleReseted();
        }
    }, [reseted, height, toggleReseted]);

    return (
        <div className='visual_parent'>
            <div className='visual_child'>
                { values }
            </div>
        </div>
    );
}

export default VisualViewer;