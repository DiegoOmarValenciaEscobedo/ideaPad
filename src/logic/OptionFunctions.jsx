import React from "react";
import { useGlobalContext } from "./GlobalContext";

export default function OptionFunctions() {

    const { globalState, setGlobalState } = useGlobalContext();

    function handleDarkMode(){
        newGlobalState = globalState;
        newGlobalState.darkMode = !globalState.darkMode;
        newGlobalState.backgroundColor = newGlobalState.darkMode ? "#333333" : "#D9D9D9";
        newGlobalState.fontColor = newGlobalState.darkMode ? "#EEEEEE" : "#333333";
        setGlobalState({...newGlobalState});
    }

    function handleSizeChange(value){
        newGlobalState = globalState;
        newGlobalState.fontSize += value;
        setGlobalState({...newGlobalState});
    }

    return {
        handleDarkMode,
        handleSizeChange,
    };

}