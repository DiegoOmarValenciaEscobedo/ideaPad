import { filepath } from './GlobalConstants';
import * as FileSystem from 'expo-file-system';
import { useGlobalContext } from './GlobalContext';

export default function FileOptions() {

    const { globalState, setGlobalState } = useGlobalContext();

    async function getFiles(){
        try {
            const files = await FileSystem.readDirectoryAsync(filepath);
            const notes = files.filter((file)=>file.split('.').pop() === 'txt');
            return notes;
          } catch (error) {
            return null;
          }
    };

    async function getFile(name){
        try {
            const file = await FileSystem.readAsStringAsync(filepath+name);
            console.log(file)
            return file;
          } catch (error) {
            return null;
          }
    }

    async function saveFile(name) {
        const nameFile = filepath + name;
        try {
            await FileSystem.writeAsStringAsync(
                nameFile, 
                globalState.text, 
                { encoding: FileSystem.EncodingType.UTF8 }
            );
            console.log('Se guardo el archivo:', globalState.name);
        }
        catch (error) {
            console.log(error);
        }
    }

    return{
        getFile,
        getFiles,
        saveFile,
    }
}