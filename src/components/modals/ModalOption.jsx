import React from "react";
import OptionFunctions from "../../logic/OptionFunctions";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useGlobalContext } from "../../logic/GlobalContext";
import { View, StyleSheet, Text, Modal, TouchableOpacity } from "react-native";
import { deviceHeight, statusBarHeight, deviceWidth } from "../../logic/GlobalConstants";

export default function modalOption() {

    const { globalState } = useGlobalContext();
    const { handleModalOption, handleNewFile, handleSaveFile, handleModalFiles, handleOpenFile } = OptionFunctions();

    const getBorderColor = {borderColor: globalState.fontColor}
    const getBackgroundColor = {backgroundColor: globalState.backgroundColor}
    const getFontStyle = {fontSize: globalState.fontSize, color: globalState.fontColor}

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={globalState.isOptionModalVisible}
            onRequestClose={handleModalOption}
        >
            <View style={[styles.container, getBackgroundColor]}>
                <View style={[styles.title, getBorderColor]}>
                    <TouchableOpacity onPress={handleModalOption} style={styles.button}>
                        <Icon name="times" size={5+globalState.fontSize} color={globalState.fontColor} />
                    </TouchableOpacity>
                    <Text style={getFontStyle}>Archivo</Text>
                </View>
                <TouchableOpacity onPress={handleSaveFile} style={[styles.title, getBorderColor]}> 
                    { globalState.name ? <Text style={getFontStyle}>Guardar</Text> : <Text style={getFontStyle}>Guardar Como</Text>}
                    <Icon name="save" size={globalState.fontSize} color={globalState.fontColor} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOpenFile} style={[styles.title, getBorderColor]}>
                    <Text style={getFontStyle}>Abrir</Text>
                    <Icon name="folder-open" size={globalState.fontSize} color={globalState.fontColor} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNewFile} style={[styles.title, getBorderColor]}>
                    <Text style={getFontStyle}>Nuevo</Text>
                    <Icon name="file" size={globalState.fontSize} color={globalState.fontColor} />
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        elevation: 50,
        borderRadius: 10,
        alignItems: "center",
        alignSelf: 'flex-end',
        justifyContent: "center",
        width: deviceWidth * 0.5,
        marginTop: statusBarHeight,
        height: deviceHeight * 0.25,
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