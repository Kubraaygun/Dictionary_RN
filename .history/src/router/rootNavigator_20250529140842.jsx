import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './tabNavigator'; // tab'li yapı burada
import DetailScreen from '../pages/detail';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{headerShown: false, title: 'Detail'}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
