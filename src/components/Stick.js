import React, { useEffect } from 'react';

import '../styles/Stick.css';

const Stick = (props) => {

    useEffect(() => {
        const setHeight = () => {
            const el = document.getElementById(props.id);
            el.style.height = props.height + 'em';
        }
        setHeight();
    }, [props.id, props.height]);

    return (
        <div id={props.id} className='stick' />
    );
}

export default Stick;