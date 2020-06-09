import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import LogIn from '../Screens/Login';
import Home from '../Screens/Home';
import Details from '../Screens/Details';
import MyClubs from '../Screens/MyClubs';

const swipe = createStackNavigator({
   LogIn: { screen: LogIn},
   Home: { screen: Home},
   Details: {screen: Details},
   MyClubs: {screen: MyClubs},
})

const appContainer = createAppContainer(swipe)
export default appContainer