import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useGlobalContext } from '../logic/GlobalContext';

export default function OptionContainer({ children }) {
    const { globalState } = useGlobalContext();

    let containerStyle = {
        backgroundColor: globalState.color,
    };

    return (
        <View style={[styles.container, containerStyle]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        width: '95%',
        marginTop: 10,
        borderRadius: 15,
        justifyContent:'space-between',
    },
});
