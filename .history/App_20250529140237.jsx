import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
enableScreens();

import DetailScreen from './src/pages/detail';

import {createStackNavigator} from '@react-navigation/stack';
import RootNavigator from './src/router/rootNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
export default App;
