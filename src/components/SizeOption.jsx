import React from "react";
import OptionContainer from "./OptionContainer";
import OptionFunctions from "../logic/OptionFunctions";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useGlobalContext } from "../logic/GlobalContext";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function DecimalOption() {

    const { globalState } = useGlobalContext();
    const { handleSizeChange } = OptionFunctions();

    return (
        <OptionContainer>
            <View style={styles.title}>
                <View style={{flexDirection:'row'}}>
                    <Icon name="arrow-up" size={globalState.fontSize} color={globalState.secondColor} />
                    <Icon name="font" size={globalState.fontSize} color={globalState.thirdColor} />
                </View>
                <Text>Tamaño Fuente</Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>handleSizeChange(-1)}>
                    <Text style={[styles.buttonText]}>-</Text>
                </TouchableOpacity>
                <Text style={[styles.decimalCountText]}>{globalState.fontSize}</Text>
                <TouchableOpacity onPress={()=>handleSizeChange(1)}>
                    <Text style={[styles.buttonText]}>+</Text>
                </TouchableOpacity>
            </View>
        </OptionContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
    },
    buttonText: {
        fontSize: 20,
        paddingHorizontal: 10,
    },
    decimalCountText: {
        fontSize: 18,
    },
    title: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});