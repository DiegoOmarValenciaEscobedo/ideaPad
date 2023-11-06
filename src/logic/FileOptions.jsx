import { filepath } from './GlobalConstants';
import * as FileSystem from 'expo-file-system';
import { useGlobalContext } from './GlobalContext';
import * as DocumentPicker from 'expo-document-picker';

export default function FileOptions() {

    const { globalState, setGlobalState } = useGlobalContext();

    async function openFile(){
        // Get the txt document
        const result = await DocumentPicker.getDocumentAsync({
            type: 'text/plain',
        });
  
        if (result.canceled) return;

        // Get the text from the document
        const file = result.assets[0];
        const response = await fetch(file.uri);
        const text = await response.text();

        // Set the txt info in the global state
        setGlobalState({
            ...globalState,
            text: text,
            save: true,
            name: file.name,
            isOptionModalVisible: false,
        });
    };

    async function save() {
        if(globalState.name){
            const nameFile = filepath + globalState.name;
            try {
                await FileSystem.writeAsStringAsync(
                    nameFile, 
                    globalState.text, 
                    { encoding: FileSystem.EncodingType.UTF8 }
                );
                console.log('Se guardo el archivo:', nameFile);
            }
            catch (error) {
                console.log(error);
            }
        }else{
            setGlobalState({
                ...globalState,
                isNameModalVisible: true,
                isOptionModalVisible: false,
            });
        }
    }

    return{
        save,
        openFile,
    }
}