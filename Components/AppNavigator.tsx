import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home'; // Your main component
import QrScreen from './QRscanner'; // Your Qr.tsx file
import GenerateQR from './GenerateQR';
import Splash from './pages/Splash';
import Auth from './pages/Auth';
import Group from './pages/Group';
import Fetch from './newComp/Fetch';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Group}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Qr"
        component={QrScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Recieve"
        component={GenerateQR}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
