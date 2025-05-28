import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
enableScreens();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from './src/pages/search';
import HistoryScreen from './src/pages/history';
import FavoriteScreen from './src/pages/favorite';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
