import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import { View, Text, StyleSheet } from "react-native";
import { useGlobalContext } from "../logic/GlobalContext";
import { statusBarHeight } from "../logic/GlobalConstants";

export default function MainScreen() {

    const { globalState } = useGlobalContext();

    const getBackgroundColor = {backgroundColor: globalState.backgroundColor}
    const getFontColor = {color: globalState.fontColor}

    return (
        <View style={[styles.container, getBackgroundColor]}>
            <Header />
            <Content />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: statusBarHeight,
    },
});