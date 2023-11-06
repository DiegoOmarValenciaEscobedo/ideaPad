import React, { useState } from 'react';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import { useGlobalContext } from '../logic/GlobalContext';

export default function FileOptions() {

    const { globalState, setGlobalState } = useGlobalContext();

    async function openFile(){
        const result = await DocumentPicker.getDocumentAsync({
            type: 'text/plain',
        });
  
        if (result.cancelled) {
            console.log('Cancelado');
        }
        const file = result.assets[0];
        const response = await fetch(file.uri);
        const text = await response.text();
        setGlobalState({...globalState, text: text});
    };

    async function save() {
        const docPath = await FileSystem.documentDirectory;
        console.log(docPath);
        setGlobalState({...globalState, text: docPath});
    }

    return{
        save,
        openFile,
    }
}