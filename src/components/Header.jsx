import React from "react";
import ModalSave from "./modals/ModalSave";
import ModalName from "./modals/ModalName";
import ModalFiles from "./modals/ModalFiles";
import ModalOption from "./modals/ModalOption";
import ModalConfig from "./modals/ModalConfig";
import image from "../../assets/images/Header.png";
import Icon from 'react-native-vector-icons/Ionicons';
import OptionFunctions from "../logic/OptionFunctions";
import { useGlobalContext } from "../logic/GlobalContext";
import ModalNotification from "./modals/ModalNotification";
import { headerHeight, deviceWidth} from "../logic/GlobalConstants";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";


export default function Header() {

    const { globalState } = useGlobalContext();
    const { handleModalConfig, handleModalOption } = OptionFunctions();
    const getBackgroundColor = {backgroundColor: globalState.fontColor}

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleModalConfig} style={[styles.button, getBackgroundColor]}>
                    <Icon name="build" size={globalState.fontSize} color={globalState.backgroundColor} />
                </TouchableOpacity>
                <Image source={image} style={styles.image} />
                <TouchableOpacity onPress={handleModalOption} style={[styles.button, getBackgroundColor]}>
                    <Icon name="document-outline" size={globalState.fontSize} color={globalState.backgroundColor} />
                </TouchableOpacity>
            </View>

            <ModalSave/>
            <ModalName/>
            <ModalConfig/>
            <ModalOption/>
            <ModalFiles/>
            <ModalNotification/>
        </>
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