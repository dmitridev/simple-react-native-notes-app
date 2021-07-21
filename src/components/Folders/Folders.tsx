import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import Main from '../Main/Main';
import Style from '../../styles/Style';
import Storage from '../../storage/Storage';

const Folder = (props: any) => {
    return <View style={Style.folder_main}>
        <ListItem style={Style.note_font}
            onPress={() => props.navigation.navigate("Notes", { folder: props.name })}>
            <ListItem.Content>
                <ListItem.Title>{props.name}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    </View>

}

const List = (props: any) => {
    let folders = Storage.folders;
    let views: JSX.Element[] = [];
    if (folders != null && folders.length) {
        folders.forEach((folder) => {
            views.push(<Folder name={folder} {...props} key={folder} />);
        });
    }

    return <ScrollView style={{ flex: 1 }}>{views}</ScrollView>
}

const Folders = (props: any) => <Main text="Папки" mainSlot={<List {...props} />} {...props} />

export default Folders;