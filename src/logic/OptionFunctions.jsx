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

    function handleTextChange(text){
        newGlobalState = globalState;
        newGlobalState.text = text;
        newGlobalState.save = false;
        setGlobalState({...newGlobalState});
    }

    function handleNewFile(){
        newGlobalState = globalState;
        if(globalState.save){
            newGlobalState.text = null;
            newGlobalState.name = null;
            newGlobalState.save = false;
            newGlobalState.isOptionModalVisible = false;
            setGlobalState({...newGlobalState});
        }else{
            newGlobalState.isNewModalVisible = true;
            newGlobalState.isNameModalVisible = false;
            newGlobalState.isOptionModalVisible = false;
            setGlobalState({...newGlobalState});
        }
    }

    function handleModalConfig(){
        newGlobalState = globalState;
        newGlobalState.isConfigModalVisible = !globalState.isConfigModalVisible;
        setGlobalState({...newGlobalState});
    }

    function handleModalOption(){
        newGlobalState = globalState;
        newGlobalState.isOptionModalVisible = !globalState.isOptionModalVisible;
        setGlobalState({...newGlobalState});
    }

    function handleModalNew(){
        newGlobalState = globalState;
        newGlobalState.isNewModalVisible = !globalState.isNewModalVisible;
        setGlobalState({...newGlobalState});
    }

    function handleModalName(){
        newGlobalState = globalState;
        newGlobalState.isNameModalVisible = !globalState.isNameModalVisible;
        setGlobalState({...newGlobalState});
    }

    return {
        handleNewFile,
        handleDarkMode,
        handleModalName,
        handleSizeChange,
        handleTextChange,
        handleModalOption,
        handleModalConfig,
        handleModalNew,
    };

}