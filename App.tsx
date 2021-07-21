import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Folders from './src/components/Folders/Folders';
import Notes from './src/components/Notes/Notes';
import Settings from './src/components/Settings/Settings';

export default function App() {
  const Stack = createStackNavigator();
  const options = {
    headerShown: false
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Notes} options={options} />
          <Stack.Screen name="Folders" component={Folders} options={options} />
          <Stack.Screen name="Settings" component={Settings} options={options} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

