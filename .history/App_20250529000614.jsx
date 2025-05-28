import HomeScreen from './src/pages/history';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
enableScreens();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from './src/pages/';
import SearchScreen from './src/pages/search';
import HistoryScreen from './src/pages/history';
import FavoriteScreen from './src/pages/favorite';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="History" component={FavoriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
