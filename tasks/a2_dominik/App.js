import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
//import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import APIScreen from "./app/screens/APIScreen.js";
import MainScreen from "./app/screens/MainScreen.js";
import color from './app/config/color.js';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Mainpage"
              component={MainScreen}
              options={{ title: 'Dominik Pegler a01468373' }}>
          </Stack.Screen>
          <Stack.Screen
              name="API"
              component={APIScreen}
              options={{ title: 'Music Search Results' }}>
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background, //'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
