import React, { useState } from 'react';
import NoteModal from './NoteModal';
import NoteSimple from './NoteSimple';
import { View, Text, StyleSheet } from 'react-native';


export default function Note(props: any) {
    let { note } = props;
    const [open, setOpen] = useState(false);

    if (!open)
        return <NoteSimple note={note} setOpen={setOpen} />
    else
        return (<NoteModal note={note} setOpen={setOpen} />)
}
