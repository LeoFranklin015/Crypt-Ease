import * as React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Assets from './pages/Assets';
import Transaction from './pages/Transaction';

const Tab = createMaterialTopTabNavigator();

function ScreenOne() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B8A6FF',
      }}>
      <Text>First Screen</Text>
    </View>
  );
}

function ScreenTwo() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}>
      <Text>Second Screen</Text>
    </View>
  );
}

export default function TabNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: '#ffffff'},
          tabBarLabelStyle: {color: '#000000'},
          tabBarIndicatorStyle: {},
        }}>
        <Tab.Screen name="Assets" component={Assets} />
        <Tab.Screen name="Transaction" component={Transaction} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
