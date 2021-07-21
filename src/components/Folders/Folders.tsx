import React from 'react';
import NotesStorage from '../../storage/NotesStorage';
import { ScrollView, View, Text } from 'react-native';
import Main from '../Main/Main';
import Style from '../../styles/Style';

const Folder = (props: any) => <View style={Style.folder_main}><Text style={Style.note_font}>{props.name}</Text></View>


const List = (props: any) => {
    const folders: string[] | null = NotesStorage.getFolders();
    const views: JSX.Element[] = [];
    if (folders != null && folders.length) {
        folders.forEach((folder) => {
            views.push(<Folder name={folder} />);
        });
    }

    return <ScrollView style={{ flex: 1 }}>{views}</ScrollView>
}

export default function Folders(props: any) {
    return <Main text="Папки" mainSlot={<List />} {...props} />
}
