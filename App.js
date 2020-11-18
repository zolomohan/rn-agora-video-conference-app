import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Conference from './screens/Conference';

const Stack = createStackNavigator();

export default function App() {
  const options = { headerShown: false };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={options} />
        <Stack.Screen name="Conference" component={Conference} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
