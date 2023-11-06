import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  // Global state
  let [globalState, setGlobalState] = useState({
    // Display state
    text: '',
    fontSize: 15,
    // Personalization state
    darkMode: false,
    color: '#FFC50C',
    fontColor: '#333333',
    thirdColor: '#ED2624',
    secondColor: '#FAA31B',
    backgroundColor: '#FFFFFF',
    // path state
    path: null,
    save: false,

  });

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
