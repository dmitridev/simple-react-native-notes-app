import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import Style from '../../styles/Style';
export default function NoteSimple(props: any) {
    const { note } = props;

    return <View style={Style.note_main}>
        <Text style={Style.note_font}
            onPress={() => props.setOpen(true)}>
            {note.text}
        </Text>
    </View>
}
