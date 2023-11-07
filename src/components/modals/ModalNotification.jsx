import React from "react";
import OptionFunctions from "../../logic/OptionFunctions";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useGlobalContext } from "../../logic/GlobalContext";
import { deviceHeight, deviceWidth } from "../../logic/GlobalConstants";
import { View, StyleSheet, Text, Modal, TouchableOpacity } from "react-native";

export default function modalOption() {

    const { globalState } = useGlobalContext();
    const { handleModalNotification } = OptionFunctions();

    const getButtonColor = {backgroundColor: globalState.color}
    const getBackgroundColor = {backgroundColor: globalState.backgroundColor}
    const getFontStyle = {fontSize: globalState.fontSize, color: globalState.fontColor}

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={globalState.isNotificationModalVisible}
            onRequestClose={handleModalNotification}
        >
            <View style={[styles.container, getBackgroundColor]}>
                <View style={styles.title}>
                    {
                        globalState.icon ? 
                        <Icon name="check-circle" size={15+globalState.fontSize} color={'green'} /> :
                        <Icon name="exclamation-circle" size={15+globalState.fontSize} color={globalState.thirdColor} />
                    }
                    <Text style={[styles.titleText, getFontStyle]}>{globalState.message}</Text>
                </View>
                <TouchableOpacity onPress={handleModalNotification} style={[styles.button, getButtonColor]}>
                    <Text style={{color:globalState.backgroundColor}}>Aceptar</Text>
                </TouchableOpacity>
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
    button:{
        width:'40%',
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
    },
})