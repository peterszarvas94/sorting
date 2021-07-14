import React, { useContext, useState } from 'react';

const ResetedContext = React.createContext();
const ResetedUpdateContext = React.createContext();

export const useReseted = () => {
    return useContext(ResetedContext);
}

export const useResetedUpdate = () => {
    return useContext(ResetedUpdateContext);
}

export const ResetedProvider = ({ children }) => {
    const [reseted, setReseted] = useState(false);

    const toggleReseted = () => {
        setReseted(prev => !prev);
    }

    return (
        <ResetedContext.Provider value={reseted}>
            <ResetedUpdateContext.Provider value={toggleReseted}>
                { children }
            </ResetedUpdateContext.Provider>
        </ResetedContext.Provider>
    );
}