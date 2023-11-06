import React from "react";
import ModalNew from "./ModalNew"
import ModalName from "./ModalName";
import ModalOption from "./ModalOption";
import ModalConfig from "./ModalConfig";
import image from "../../assets/images/Header.png";
import Icon from 'react-native-vector-icons/Ionicons';
import OptionFunctions from "../logic/OptionFunctions";
import { useGlobalContext } from "../logic/GlobalContext";
import { headerHeight, deviceWidth} from "../logic/GlobalConstants";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";


export default function Header() {
    const { globalState } = useGlobalContext();
    const { handleModalConfig, handleModalOption } = OptionFunctions();
    const getBackgroundColor = {backgroundColor: globalState.fontColor}

    return (
        <View style={styles.container}>
            <ModalNew/>
            <ModalName/>
            <ModalConfig/>
            <ModalOption/>
            <TouchableOpacity onPress={handleModalConfig} style={[styles.button, getBackgroundColor]}>
                <Icon name="build" size={globalState.fontSize} color={globalState.backgroundColor} />
            </TouchableOpacity>
            <Image source={image} style={styles.image} />
            <TouchableOpacity onPress={handleModalOption} style={[styles.button, getBackgroundColor]}>
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