import React, { useContext, useState } from 'react';

import RandomValues from '../components/RandomValues';

const HeightsContext = React.createContext();

export const useHeights = () => {
    return useContext(HeightsContext);
}

export const HeightsProvider = ({ children }) => {
    const [heights, setHeights] = useState(RandomValues(40));

    return (
        <HeightsContext.Provider value={{heights, setHeights}}>
            { children }
        </HeightsContext.Provider>
    );
}