import React from "react";
import { useGlobalContext } from "../logic/GlobalContext";
import { displayHeight, deviceWidth } from "../logic/GlobalConstants";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";

export default function Content() {
    const { globalState, setGlobalState } = useGlobalContext();
    const getBackgroundColor = {backgroundColor: globalState.color}
    getFontSize = {fontSize: globalState.fontSize}
    return (
        <View style={[styles.container, getBackgroundColor]}>
            <ScrollView>
                <TextInput
                    style={[styles.textArea, getFontSize]}
                    multiline={true}
                    placeholder="Escribe tu nota aquí..."
                    value={globalState.text}
                    onChangeText={(text) => {setGlobalState({...globalState, text: text})}}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: displayHeight*0.7,
        width: deviceWidth * 0.95,
        borderRadius: 15,
        marginHorizontal: 20,
        padding: 10,
        marginBottom: 10,
        elevation: 5,
    },
    textArea: {
        color: "black",
        textAlign: "justify",
    },
});