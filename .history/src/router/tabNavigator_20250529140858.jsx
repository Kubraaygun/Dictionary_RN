import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from '../pages/history';
import FavoriteScreen from '../pages/favorite';
import SearchScreen from '../pages/search';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{headerShown: false}}
        name="History"
        component={HistoryScreen}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
