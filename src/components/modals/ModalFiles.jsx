import React, {useEffect} from "react";
import FileOptions from "../../logic/FileOptions";
import OptionFunctions from "../../logic/OptionFunctions";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useGlobalContext } from "../../logic/GlobalContext";
import { View, StyleSheet, Text, Modal, TouchableOpacity } from "react-native";
import { deviceHeight, statusBarHeight, deviceWidth } from "../../logic/GlobalConstants";

export default function modalOption() {

    const {getFiles} = FileOptions();
    const { globalState, files, setFiles } = useGlobalContext();
    const { handleModalFiles, handleLoadFile } = OptionFunctions();

    const getBorderColor = {borderColor: globalState.fontColor}
    const getBackgroundColor = {backgroundColor: globalState.backgroundColor}
    const getFontStyle = {fontSize: globalState.fontSize, color: globalState.fontColor}

    useEffect(() => {
        async function fetchFiles() {
            try {
                const files = await getFiles();
                if (files !== null) {
                    setFiles(files);
                }
            } catch (error) {
            }
        }
        fetchFiles();
    }, []);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={globalState.isFilesModalVisible}
            onRequestClose={handleModalFiles}
        >
            <View style={[styles.container, getBackgroundColor]}>
                <View style={[styles.title, getBorderColor]}>
                    <TouchableOpacity onPress={handleModalFiles} style={styles.button}>
                        <Icon name="times" size={5+globalState.fontSize} color={globalState.fontColor} />
                    </TouchableOpacity>
                    <Text style={getFontStyle}>Archivos existentes</Text>
                </View>
                {
                    files.map((file, index) => (
                        <TouchableOpacity onPress={() => handleLoadFile(file)} style={[styles.title, getBorderColor]} key={index}>
                            <Text style={getFontStyle}>{file}</Text>
                            <Icon name="file" size={globalState.fontSize} color={globalState.fontColor} />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        elevation: 50,
        borderRadius: 10,
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: "center",
        width: deviceWidth * 0.6,
        marginTop: statusBarHeight,
        minHeight: deviceHeight * 0.15,
    },
    title:{
        width:'95%',
        padding: 10,
        flexDirection: "row",
        borderBottomWidth: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },
})