import React from 'react';
import { useResetedUpdate } from '../context/ResetedContext';

import '../styles/ResetButton.css';

const ResetButton = () => {
    
    const toggleReseted = useResetedUpdate();

    return (
        <>
            <button className='reset' onClick={toggleReseted}>reset</button>
        </>
    );
}

export default ResetButton;