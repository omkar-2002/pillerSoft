import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Community from '../screens/community/Community';
import Search from '../screens/search/Search';
import Profile from '../screens/profile/Profile';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        // tabBarActiveTintColor: Colors.white,
        // tabBarInactiveTintColor: Colors.inactiveTabBar,
        // tabBarStyle: {
        //   backgroundColor: Colors.primary,
        //   paddingBottom: 16,
        //   height: 62,
        // },
      }}>
      <Tab.Screen
        component={Home}
        options={props => ({
          //   ...HomeOptions(props),
          //   tabBarIcon: ({focused}) => {
          //     if (focused) {
          //       return <ActiveSubtract />;
          //     } else {
          //       return <InactiveSubtract />;
          //     }
          //   },
        })}
        name="Home"
      />
      <Tab.Screen
        options={props => ({})}
        component={Community}
        name="Community"
      />
      <Tab.Screen options={props => ({})} component={Search} name="Search" />
      <Tab.Screen options={props => ({})} component={Profile} name="Profile" />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
