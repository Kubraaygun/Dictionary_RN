import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const SearchScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Arama Geçmişi</Text>
    </View>
  );
};

function SearchStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
}
export default SearchStack;
