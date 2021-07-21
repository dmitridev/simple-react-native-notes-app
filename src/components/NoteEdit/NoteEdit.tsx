import React from 'react';
import Main from '../Main/Main';
import Note from '../Notes/Note/Note';

export default function NoteEdit(props: any) {
    console.log(props);
    return <Main mainSlot={<Note addNew note={props.route.params.note} />} text="Редактирование" {...props} />
}