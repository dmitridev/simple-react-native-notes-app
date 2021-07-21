import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Style from '../../../styles/Style';
import { StatusBar, TextInput } from 'react-native';
import { Header, FAB } from 'react-native-elements';


export default function Note(props: any) {
    let { note } = props;
    const [open, setOpen] = useState(false);

    if (!open)
        return <NoteSimple note={note} setOpen={setOpen} />
    else
        return <NoteModal note={note} setOpen={setOpen} />
}

const NoteSimple = (props: any) =>
    <View style={Style.note_main}>
        <Text style={Style.note_font}
            onPress={() => props.setOpen(true)}>
            {props.note.text}
        </Text>
    </View>

const NoteModal = (props: any) =>
    <View style={Style.note_modal}>
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
            {props.note.text}
        </TextInput>
        <FAB color="red" placement="right" size='large' icon={{ name: 'save', color: '#fff' }} />
    </View>
