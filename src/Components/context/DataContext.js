import React, { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

export const useDataContext = () => {
    return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};
