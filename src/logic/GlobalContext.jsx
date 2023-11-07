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
    save: true,
    //modals
    isSaveModalVisible: false,
    isNameModalVisible: false,
    isFilesModalVisible: false,
    isConfigModalVisible: false,
    isOptionModalVisible: false,
    isNotificationModalVisible: false,
    //mesages
    icon: false,
    message: null,

  });

  const [files, setFiles] = useState([]);

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState, files, setFiles }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
