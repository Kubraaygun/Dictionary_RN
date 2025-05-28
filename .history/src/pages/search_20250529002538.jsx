import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();

const SearchScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Arama Geçmişi</Text>
    </View>
  );
};

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="History" component={HistoryScreen} />
      <HomeStack.Screen name="Search" component={SearchScreen} />
      <HomeStack.Screen name="Favorite" component={FavoriteScreen} />
    </HomeStack.Navigator>
  );
}
export default SearchStack;
