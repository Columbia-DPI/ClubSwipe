import * as React from 'react';

import AppNavigator from './components/Navigation/Routes';
import LogIn from './components/Screens/Login'
export default class App extends React.Component {
  render() {
    return (
    <AppNavigator>
      <LogIn />
    </AppNavigator>
    )
  }
}
