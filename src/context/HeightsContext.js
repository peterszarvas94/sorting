import React, { useContext, useState } from 'react';

import RandomValues from '../components/RandomValues';

const HeightsContext = React.createContext();
const HeightsUpdateContext = React.createContext();

export const useHeights = () => {
    return useContext(HeightsContext);
}

export const useHeightsUpdate = () => {
    return useContext(HeightsUpdateContext);
}

export const HeightsProvider = ({ children }) => {
    const [heights, setHeights] = useState(RandomValues(40));

    const modifyHeights = (arr) => {
        setHeights(arr);
    }

    return (
        <HeightsContext.Provider value={heights}>
            <HeightsUpdateContext.Provider value={(arr) => modifyHeights(arr)}>
                { children }
            </HeightsUpdateContext.Provider>
        </HeightsContext.Provider>
    );
}