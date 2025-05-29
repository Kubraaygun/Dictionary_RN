import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
enableScreens();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from './src/pages/history';
import FavoriteScreen from './src/pages/favorite';
import SearchStack from './src/pages/search';
import DetailScreen from './src/pages/detail';
import SearchScreen from './src/pages/search';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const SearchStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{headerShown: true, title: 'Search'}}
        name="Search"
        component={SearchScreen}
      />
      <HomeStack.Screen
        options={{headerShown: true, title: 'Detail'}}
        name="Detail"
        component={DetailScreen}
      />
    </HomeStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen
          name="Search"
          options={{headerShown: false}}
          component={SearchStack}
        />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export {App, SearchStack};
