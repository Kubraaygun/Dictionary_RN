import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../pages/search';
import DetailScreen from '../pages/detail';

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: true, title: 'Search'}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{headerShown: true, title: 'Detail'}}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
