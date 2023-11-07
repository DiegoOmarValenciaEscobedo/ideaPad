import React from "react";
import { deviceWidth } from "../logic/GlobalConstants";
import OptionFunctions from "../logic/OptionFunctions";
import { useGlobalContext } from "../logic/GlobalContext";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";

export default function Content() {

    const { globalState } = useGlobalContext();
    const {handleTextChange} = OptionFunctions();

    getFontSize = {fontSize: globalState.fontSize}
    const getBackgroundColor = {backgroundColor: globalState.color}

    return (
        <View style={[styles.container, getBackgroundColor]}>
            <ScrollView>
                <TextInput
                    style={[styles.textArea, getFontSize]}
                    multiline={true}
                    placeholder="Escribe tu nota aquí..."
                    value={globalState.text}
                    onChangeText={(text) => handleTextChange(text)}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        elevation: 5,
        marginBottom: 10,
        borderRadius: 15,
        marginHorizontal: 20,
        width: deviceWidth * 0.9,
    },
    textArea: {
        color: "black",
        textAlign: "justify",
    },
});