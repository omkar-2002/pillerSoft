import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding1 from '../screens/auth/Onboarding1';
import Onboarding2 from '../screens/auth/Onboarding2';
import Login from '../screens/auth/Login';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const Startup = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          component={Onboarding1}
          name="Onboarding1"
        />
        <Stack.Screen
          options={{headerShown: false}}
          component={Onboarding2}
          name="Onboarding2"
        />
        <Stack.Screen
          options={{headerShown: false}}
          component={Login}
          name="Login"
        />
        <Stack.Screen
          options={{headerShown: false}}
          component={TabNavigator}
          name="TabNavigator"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Startup;

const styles = StyleSheet.create({});
