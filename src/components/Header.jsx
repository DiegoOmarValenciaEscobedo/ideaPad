import React, {useState} from "react";
import ModalOption from "./ModalOption";
import ModalConfig from "./ModalConfig";
import image from "../../assets/images/Header.png";
import Icon from 'react-native-vector-icons/Ionicons';
import { headerHeight, deviceWidth} from "../logic/GlobalConstants";
import { useGlobalContext } from "../logic/GlobalContext";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";


export default function Header() {
    const { globalState } = useGlobalContext();
    const [configModal, setConfigModal] = useState(false);
    const [optionModal, setOptionModal] = useState(false);
    const getBackgroundColor = {backgroundColor: globalState.fontColor}

    return (
        <View style={styles.container}>
            <ModalConfig isVisible={configModal} setIsVisible={setConfigModal}/>
            <ModalOption isVisible={optionModal} setIsVisible={setOptionModal}/>
            <TouchableOpacity onPress={()=>{setConfigModal(true)}} style={[styles.button, getBackgroundColor]}>
                <Icon name="build" size={globalState.fontSize} color={globalState.backgroundColor} />
            </TouchableOpacity>
            <Image source={image} style={styles.image} />
            <TouchableOpacity onPress={()=>{setOptionModal(true)}} style={[styles.button, getBackgroundColor]}>
                <Icon name="document-outline" size={globalState.fontSize} color={globalState.backgroundColor} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        flexDirection: "row",
        alignItems: "center",
        height: headerHeight,
        paddingHorizontal: 10,
        justifyContent: "space-between",
    },
    image: {
        resizeMode: "contain",
        width: deviceWidth * 0.5,
    },
    button: {
        padding: 10,
        elevation: 50,
        borderRadius: 10,
    },
});