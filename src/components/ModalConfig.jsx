import React from "react";
import SizeOption from "./SizeOption";
import DarkModeSwitch from "./DarkModeSwitch";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useGlobalContext } from "../logic/GlobalContext";
import { View, StyleSheet, Text, Modal, TouchableOpacity } from "react-native";
import { deviceHeight, statusBarHeight, deviceWidth } from "../logic/GlobalConstants";


export default function modalConfig({isVisible, setIsVisible}) {

    const { globalState } = useGlobalContext();
    const getBackgroundColor = {backgroundColor: globalState.backgroundColor}
    const getFontStyle = {fontSize: globalState.fontSize, color: globalState.fontColor}
    const getBorderColor = {borderColor: globalState.fontColor}

    function toggleModal(){
        setIsVisible(!isVisible);
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {setIsVisible(false);}}
        >
            <View style={[styles.container, getBackgroundColor]}>
                <View style={[styles.title, getBorderColor]}>
                    <Text style={getFontStyle}>Configuraciones</Text>
                    <TouchableOpacity onPress={toggleModal}>
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