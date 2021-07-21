import React from 'react';
import { ScrollView } from 'react-native';
import NotesStorage from '../../storage/NotesStorage';
import Storage from '../../storage/Storage';
import Note from './Note/Note';
import Main from '../Main/Main';
import { v4 } from 'uuid';
import { useMemo, useState, useEffect } from 'react';



const List = (props: any) => {
    const { folder = 'default' } = props;
    console.log(folder);
    let views = [];
    let notes = Storage.notes;
    
    if (notes?.length) 
        notes.forEach((note) => {
            views.push(<Note note={note} key={note?.id + new Date().valueOf()} {...props} />);
        });
    

    return <ScrollView>{views}</ScrollView>
}

export default function Notes(props: any) {
    return <Main text="Заметки" mainSlot={<List {...props} />} {...props} />
}
