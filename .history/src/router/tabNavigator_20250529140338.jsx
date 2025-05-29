import React from 'react';
import HistoryScreen from './src/pages/history';
import FavoriteScreen from './src/pages/favorite';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RootNavigator from './rootNavigator';
import SearchScreen from '../pages/search';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen
        name="Search"
        options={{headerShown: false}}
        component={SearchScreen}
      />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
