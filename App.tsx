import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Icon, FAB, Header } from 'react-native-elements';

import Note from './src/components/Note/Note';

export default function App() {
  const objects = [
    { id: '1', text: 'Заметка 1' },
    { id: '2', text: 'Заметка 2' },
    { id: '3', text: 'Заметка 3' },
    { id: '4', text: 'Заметка 4' },
  ], items = [];

  for (const note of objects)
    items.push(<Note note={note} key={note.id} />)

  return (
    <View style={{ flex: 1 }}>
      <Header backgroundColor="red" leftComponent={{ icon: 'settings', color: '#fff', onPress: () => { } }}
        centerComponent={{ text: 'Заметки', style: { color: '#fff' } }}
        rightComponent={{ icon: 'search', color: '#fff' }}></Header>
      <ScrollView>
        {items}
      </ScrollView>
      <FAB color="red" placement="right" size='large' icon={{ name: 'add', color: '#fff' }} />
    </View>
  );
}

