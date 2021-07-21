import React from 'react';
import { View, Text } from 'react-native';
import Style from '../../styles/Style';
import Main from '../Main/Main';


const List = props =>
    <View style={{ flex: 1 }}>

        <View style={Style.note_main}>
            <Text style={Style.note_font}>
                Цвет
            </Text>
            <Text style={Style.note_font}>
                Тёмная тема
            </Text>
        </View>
    </View>


export default function Settings(props: any) {
    return <Main mainSlot={<List />} text="Настройки" {...props} />
}
