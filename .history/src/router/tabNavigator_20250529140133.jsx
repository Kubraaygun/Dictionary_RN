import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HistoryScreen from './src/pages/history';
import FavoriteScreen from './src/pages/favorite';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from './src/pages/search';
import rootNavigator from './rootNavigator';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen
        name="Search"
        options={{headerShown: false}}
        component={rootNavigator}
      />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
