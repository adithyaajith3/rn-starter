import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import CounterReductor from "./src/screens/CounterReductor";
import TextState from "./src/screens/TextState";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Counter: CounterReductor,
    Text: TextState
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
