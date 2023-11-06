import React from "react";
import FileOptions from "../logic/FileOptions";
import OptionFunctions from "../logic/OptionFunctions";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useGlobalContext } from "../logic/GlobalContext";
import { deviceHeight, deviceWidth } from "../logic/GlobalConstants";
import { View, StyleSheet, Text, Modal, TouchableOpacity, TextInput } from "react-native";

export default function modalOption() {

    const { save } = FileOptions();
    const { handleModalName } = OptionFunctions();
    const { globalState, setGlobalState } = useGlobalContext();

    const getFontStyle = {fontSize: globalState.fontSize}
    const getTitleColor = {backgroundColor: globalState.color}
    const getButtonColor = {backgroundColor: globalState.thirdColor}
    const getBackgroundColor = {backgroundColor: globalState.backgroundColor}
    const getInputColor = {borderColor: globalState.color, color: globalState.fontColor}

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={globalState.isNameModalVisible}
            onRequestClose={handleModalName}
        >
            <View style={[styles.container, getBackgroundColor]}>
                <View style={[styles.title, getTitleColor]}>
                    <Icon name="info-circle" size={15+globalState.fontSize} color={globalState.thirdColor} />
                    <Text style={[styles.titleText, getFontStyle]}>Para guardar tu archivo dale un nombre. (Puedes o no escribir la extension txt)</Text>
                </View>
                <TextInput 
                    placeholder="Nombre del archivo..." 
                    placeholderTextColor={globalState.fontColor}
                    style={[styles.textInput, getInputColor]} 
                    value={globalState.name}
                    onChangeText={(text)=>setGlobalState({...globalState, name: text})}
                />
                <View style={[styles.buttonContainer]}>
                    <TouchableOpacity onPress={handleModalName} style={[styles.button, getButtonColor]}>
                        <Text style={{color:globalState.backgroundColor}}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={save} style={[styles.button, getTitleColor]}>
                        <Text style={{color:globalState.fontColor}}>Guardar</Text>
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
        top: deviceHeight * 0.30,
        width: deviceWidth * 0.8,
        height: deviceHeight * 0.4,
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
        padding: 10,
        borderRadius: 10,
    },
    textInput:{
        padding: 5,
        width:'90%',
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
    }
})