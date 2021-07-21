import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import Style from '../../../styles/Style';
import { ListItem, FAB } from 'react-native-elements';
import NotesStorage from '../../../storage/NotesStorage';
import NoteEntity from '../../../entity/NoteEntity';
import Storage from '../../../storage/Storage';


export default function Note(props: any) {
    let { note = NoteEntity.Empty() } = props;
    console.log(props);
    let { addNew } = props;
    const [open, setOpen] = useState(addNew);
    const [text, setText] = useState("");

    const save = async () => {
        note.text = text;
        await NotesStorage.update(note);
        Storage.update();
    }

    if (!open)
        return <NoteSimple note={note} setOpen={setOpen} {...props} />
    else
        return <NoteModal note={note} setOpen={setOpen} onChange={setText} onSave={save} {...props} />
}
const NoteSimple = (props: any) =>
    <ListItem style={{ padding: 10 }} onPress={() => props.navigation.navigate("NoteEdit", { note: props.note, update: props.update })}>
        <ListItem.Content>
            <ListItem.Title>{props.note?.text}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
    </ListItem>


const NoteModal = (props: any) => {
    let text = props.note?.text ? props.note?.text : "";
    console.log("here");
    return <View style={{ flex: 1 }}>
        <TextInput style={{ ...Style.note_font, ...Style.textOnTop, backgroundColor: '#eee', padding: 20 }} editable multiline onChangeText={props.onChange} maxLength={2048} >{text}</TextInput>
        <FAB color="#001A72" 
             placement="right" 
             size='large' 
             onPress={props.onSave}
             icon={{ name: 'save', color: '#fff' }} />
    </View>
}

