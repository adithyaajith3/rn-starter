import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import CounterReductor from "./src/screens/CounterReductor";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    CounterReductor: CounterReductor
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
