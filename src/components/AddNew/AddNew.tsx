import React from 'react';
import Main from '../Main/Main';
import Note from '../Notes/Note/Note';

export default function AddNew(props: any) {
    return <Main mainSlot={<Note addNew />} text="Новая заметка" />
}