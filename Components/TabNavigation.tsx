import * as React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

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
        backgroundColor: '#B8A6FF',
      }}>
      <Text>Second Screen</Text>
    </View>
  );
}

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: '#6A5ACD'},
          tabBarLabelStyle: {color: 'white'},
          tabBarIndicatorStyle: {},
        }}>
        <Tab.Screen name="Assets" component={ScreenOne} />
        <Tab.Screen name="Transaction" component={ScreenTwo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
