import React from 'react';
import { ScrollView } from 'react-native';
import NotesStorage from '../../storage/NotesStorage';
import NoteEntity from '../../entity/NoteEntity';
import Note from './Note/Note';
import Main from '../Main/Main';

const List = (props: any) => {
    const { folder } = props;
    const notes: NoteEntity[] = NotesStorage.getNotes(folder);
    const views: JSX.Element[] = [];
    if (notes.length) {
        notes.forEach((note) => {
            views.push(<Note note={note} key={note.id} />);
        });
    }

    return <ScrollView style={{ flex: 1 }}>{views}</ScrollView>
}


export default function Notes(props: any) {
    return <Main text="Заметки" mainSlot={<List />} {...props} />
}
