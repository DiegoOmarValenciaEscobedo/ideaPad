import FileOptions from "./FileOptions";
import { useGlobalContext } from "./GlobalContext";

export default function OptionFunctions() {

    const {getFile, saveFile} = FileOptions();
    const { globalState, setGlobalState, files, setFiles } = useGlobalContext();

    // Config functions
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

    // Modal functions
    function handleModalFiles(){
        newGlobalState = globalState;
        newGlobalState.isFilesModalVisible = !globalState.isFilesModalVisible;
        newGlobalState.isOptionModalVisible = !globalState.isOptionModalVisible;
        setGlobalState({...newGlobalState});
    }

    function handleModalSave(){
        newGlobalState = globalState;
        newGlobalState.isSaveModalVisible = !globalState.isSaveModalVisible;
        newGlobalState.isOptionModalVisible = !globalState.isOptionModalVisible;
        setGlobalState({...newGlobalState});
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

    function handleModalName(){
        newGlobalState = globalState;
        newGlobalState.isNameModalVisible = !globalState.isNameModalVisible;
        setGlobalState({...newGlobalState});
    }

    function handleModalNotification(){
        newGlobalState = globalState;
        newGlobalState.isNotificationModalVisible = !globalState.isNotificationModalVisible;
        setGlobalState({...newGlobalState});
    }

    // File functions
    function checkSave(){
        if(!globalState.save){
            newGlobalState = globalState;
            newGlobalState.isSaveModalVisible = true;
            newGlobalState.isOptionModalVisible = false;
            setGlobalState({...newGlobalState});
            return false;
        }
        return true;
    }

    function handleNoSave(){
        newGlobalState = globalState;
        newGlobalState.save = true;
        setGlobalState({...newGlobalState});
        handleModalSave();
    }

    function handleOpenFile(){
        if(checkSave()){
            handleModalFiles();
        }
    }

    async function handleLoadFile(name){
        const text = await getFile(name);
        newGlobalState = globalState;
        newGlobalState.text = text;
        newGlobalState.name = name;
        newGlobalState.save = true;
        newGlobalState.icon = true;
        newGlobalState.isFilesModalVisible = false;
        newGlobalState.isNotificationModalVisible = true;
        newGlobalState.message = 'Se cargo el archivo: '+ name;
        setGlobalState({...newGlobalState});
    }


    function handleNewFile(){
        newGlobalState = globalState;
        if(globalState.save){
            newGlobalState.text = null;
            newGlobalState.name = null;
            newGlobalState.save = true;
            newGlobalState.isOptionModalVisible = false;
            setGlobalState({...newGlobalState});
        }else{
            newGlobalState.isSaveModalVisible = true;
            newGlobalState.isOptionModalVisible = false;
            setGlobalState({...newGlobalState});
        }
    }

    function handleSaveFile(){
        if(globalState.name){
            newGlobalState = globalState;
            const name = globalState.name.split('.').pop();
            if(name !== 'txt') newGlobalState.name = globalState.name + '.txt';
            newGlobalState.save = true;
            newGlobalState.icon = true;
            newGlobalState.isSaveModalVisible = false;
            newGlobalState.message = 'Se guardo el archivo: '+ globalState.name;
            setGlobalState({...newGlobalState});
            saveFile(globalState.name);
            if (!files.includes(globalState.name)) {
                setFiles([...files, globalState.name]);
            }
            handleModalNotification();
        }else{
            handleModalName();
        }
    }

    function handleSaveName(){
        newGlobalState = globalState;
        if(globalState.name){
            newGlobalState.isNameModalVisible = false;
            setGlobalState({...newGlobalState});
            handleSaveFile();
        }else{
            newGlobalState.icon=false;
            newGlobalState.message='Nombre no valido';
            setGlobalState({...newGlobalState});
            handleModalNotification();
        }

    }

    return {
        handleNoSave,
        handleNewFile,
        handleOpenFile,
        handleSaveFile,
        handleLoadFile,
        handleSaveName,
        handleDarkMode,
        handleModalName,
        handleModalSave,
        handleSizeChange,
        handleModalFiles,
        handleTextChange,
        handleModalOption,
        handleModalConfig,
        handleModalNotification,
    };

}