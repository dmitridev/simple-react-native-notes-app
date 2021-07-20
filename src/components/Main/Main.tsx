import React from "react";
import { View, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import Note from '../Note/Note';
import NotesStorage from '../../storage/NotesStorage';
import { Button } from 'react-native-elements';


export default function Main(props: any) {
    const items: any = []

    NotesStorage.getAllNotes()
        .then(out => out.forEach((v) =>
            items.push(<Note note={v} key={v.id} />)));


    return <View style={{ flex: 1 }}>
        <Header backgroundColor="#eee"
            centerComponent={{ text: 'Заметки', style: { color: '#000', fontSize: 30 } }}
        ></Header>
        <ScrollView style={{ flex: 1 }}>{items}</ScrollView>
        <View style={{ 
            flexDirection: 'row', 
            alignItems: 'stretch', 
            justifyContent: 'space-between' 
            }}>
            <Button title="text" />
            <Button title="text" />
            <Button title="text" />
            <Button title="text" />
        </View>
    </View>
}