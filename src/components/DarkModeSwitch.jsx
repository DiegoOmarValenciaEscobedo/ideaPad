import React from "react";
import OptionContainer from "./OptionContainer";
import Icon from 'react-native-vector-icons/Ionicons';
import OptionFunctions from "../logic/OptionFunctions";
import { useGlobalContext } from "../logic/GlobalContext";
import { Text, Switch, View, StyleSheet } from "react-native";


export default function DarkModeSwitch(){

    const {globalState} = useGlobalContext();
    const {handleDarkMode} = OptionFunctions();

    return(
        <OptionContainer>
            <View style={styles.title}>
                {
                    globalState.darkMode ?
                        <>
                            <Icon name="moon" size={globalState.fontSize}/>
                            <Text>Modo Noche</Text>
                        </>
                    :
                        <>
                            <Icon name="sunny" size={globalState.fontSize}/>
                            <Text>Modo Claro</Text>
                        </>
                }
            </View>
            <View style={styles.container}>
                <Switch
                    value={globalState.darkMode}
                    onValueChange={handleDarkMode}
                    thumbColor={globalState.thirdColor}
                    trackColor={{ false: globalState.backgroundColor, true: globalState.backgroundColor }}
                />
            </View>
        </OptionContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        justifyContent: 'space-between',
    },
    title:{
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    }
});