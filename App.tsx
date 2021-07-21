import React from 'react';
import 'react-native-get-random-values';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Folders from './src/components/Folders/Folders';
import Notes from './src/components/Notes/Notes';
import AddNew from './src/components/AddNew/AddNew';
import Settings from './src/components/Settings/Settings';
import NoteEdit from './src/components/NoteEdit/NoteEdit';
import Storage from './src/storage/Storage';


export default function App() {
  const Stack = createStackNavigator();
  const options = {
    headerShown: false
  }

  Storage.update();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Notes" component={Notes} options={options} />
          <Stack.Screen name="AddNew" component={AddNew} options={options} />
          <Stack.Screen name="Folders" component={Folders} options={options} />
          <Stack.Screen name="Settings" component={Settings} options={options} />
          <Stack.Screen name="NoteEdit" component={NoteEdit} options={options} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

