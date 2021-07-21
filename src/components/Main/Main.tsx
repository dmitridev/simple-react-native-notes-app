import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import { Icon } from 'react-native-elements';

export default function Main(props: any) {
    const items: any = []

    const color = props.text === 'Папки' ? 'black' : "#001A72";

    return <View style={{ flex: 1 }}>
        <Header backgroundColor="#eee"
            centerComponent={{ text: props.text, style: { color: '#000', fontSize: 30 } }}
            rightComponent={{ icon: 'search', style: { color: '#001A72', fontSize: 50 } }}
        />
        {props.mainSlot}
        <View style={{
            backgroundColor: '#eee',
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'space-around',
            padding: 10,
        }}>
            <Icon name="plus" type="font-awesome" color="#001A72" onPress={() => props.navigation.navigate('AddNew')}/>
            <Icon name="folder" type="font-awesome" color={color} onPress={() => props.navigation.navigate('Folders')} />
            <Icon name="cog" type="font-awesome" color="#001A72" onPress={() => props.navigation.navigate('Settings')} />
        </View>


    </View>
}