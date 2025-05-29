import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HistoryScreen from './src/pages/history';
import FavoriteScreen from './src/pages/favorite';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen
        name="Search"
        options={{headerShown: false}}
        component={SearchStack}
      />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
