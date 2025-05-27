import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/pages/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
export default App;
