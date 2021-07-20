import React from "react";
import { Modal, View, TextInput, StyleSheet, StatusBar } from 'react-native';
import { Header, FAB } from 'react-native-elements';
import Style from '../../styles/Style'

export default function NoteModal(props: any) {
    const { note } = props;
    return (<View style={Style.note_modal}>
        <StatusBar />
        <Header backgroundColor="red"
            centerComponent={{ text: "Заметка", style: { color: "#fff" } }}
            rightComponent={{ icon: "close", color: "#fff", onPress: () => props.setOpen(false) }}
        />

        <TextInput
            style={{ ...Style.note_font, ...Style.textOnTop, backgroundColor: '#eee' }}
            editable
            multiline
            maxLength={2048}>
            {note.text}
        </TextInput>
        <FAB color="red" placement="right" size='large' icon={{ name: 'save', color: '#fff' }} />
    </View>)
}

