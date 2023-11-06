import React from "react";
import SizeOption from "./SizeOption";
import DarkModeSwitch from "./DarkModeSwitch";
import OptionFunctions from "../logic/OptionFunctions";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useGlobalContext } from "../logic/GlobalContext";
import { View, StyleSheet, Text, Modal, TouchableOpacity } from "react-native";
import { deviceHeight, statusBarHeight, deviceWidth } from "../logic/GlobalConstants";


export default function modalConfig() {

    const { globalState } = useGlobalContext();
    const { handleModalConfig } = OptionFunctions();
    const getBorderColor = {borderColor: globalState.fontColor}
    const getBackgroundColor = {backgroundColor: globalState.backgroundColor}
    const getFontStyle = {fontSize: globalState.fontSize, color: globalState.fontColor}

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={globalState.isConfigModalVisible}
            onRequestClose={handleModalConfig}
        >
            <View style={[styles.container, getBackgroundColor]}>
                <View style={[styles.title, getBorderColor]}>
                    <Text style={getFontStyle}>Configuraciones</Text>
                    <TouchableOpacity onPress={handleModalConfig}>
                        <Icon name="times" size={5+globalState.fontSize} color={globalState.fontColor} />
                    </TouchableOpacity>
                </View>
                <DarkModeSwitch/>
                <SizeOption/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        elevation: 50,
        borderRadius: 10,
        alignItems: "center",
        alignSelf: 'flex-start',
        justifyContent: "center",
        width: deviceWidth * 0.5,
        marginTop: statusBarHeight,
        height: deviceHeight * 0.35,
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