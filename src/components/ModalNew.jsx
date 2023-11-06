import React from "react";
import FileOptions from "../logic/FileOptions";
import OptionFunctions from "../logic/OptionFunctions";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useGlobalContext } from "../logic/GlobalContext";
import { deviceHeight, deviceWidth } from "../logic/GlobalConstants";
import { View, StyleSheet, Text, Modal, TouchableOpacity } from "react-native";

export default function modalOption() {

    const { save } = FileOptions();
    const { globalState } = useGlobalContext();
    const { handleModalNew } = OptionFunctions();

    const getFontStyle = {fontSize: globalState.fontSize}
    const getTitleColor = {backgroundColor: globalState.color}
    const getButtonColor = {backgroundColor: globalState.thirdColor}
    const getBackgroundColor = {backgroundColor: globalState.backgroundColor}

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={globalState.isNewModalVisible}
            onRequestClose={handleModalNew}
        >
            <View style={[styles.container, getBackgroundColor]}>
                <View style={[styles.title, getTitleColor]}>
                    <Icon name="exclamation-circle" size={15+globalState.fontSize} color={globalState.thirdColor} />
                    <Text style={[styles.titleText, getFontStyle]}>No has guardado el archivo actual ¿Quieres guardarlo?</Text>
                </View>
                <View style={[styles.buttonContainer]}>
                    <TouchableOpacity onPress={handleModalNew} style={[styles.button, getButtonColor]}>
                        <Text style={{color:globalState.backgroundColor}}>No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={save} style={[styles.button, getTitleColor]}>
                        <Text style={{color:globalState.fontColor}}>Si</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        elevation: 50,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: "center",
        top: deviceHeight * 0.40,
        width: deviceWidth * 0.6,
        height: deviceHeight * 0.25,
        justifyContent: "space-around",
    },
    title:{
        width:'90%',
        padding: 10,
        borderRadius: 15,
        alignItems: "center",
        flexDirection: "column",
    },
    titleText:{
        fontWeight: 'bold', 
        textAlign: 'center',
    },
    buttonContainer:{
        width:'100%',
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button:{
        width:'30%',
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
    },
})