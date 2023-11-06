import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  // Global state
  let [globalState, setGlobalState] = useState({
    // Display state
    text: null,
    fontSize: 15,
    // Personalization state
    darkMode: false,
    color: '#FFC50C',
    fontColor: '#333333',
    thirdColor: '#ED2624',
    secondColor: '#FAA31B',
    backgroundColor: '#FFFFFF',
    // path state
    name: null,
    save: false,
    //modals
    isNameModalVisible: false,
    isConfigModalVisible: false,
    isOptionModalVisible: false,
    isNewModalVisible: false,

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
