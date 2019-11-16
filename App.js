const allClubMock = [
  {
    name: "Columbia DPI",
    website: "https://www.columbiadpi.com/",
    description: "DPI is a club that brings people together to build tech stuff",
  },
  {
    name: "Columbia DPI",
    website: "https://www.columbiadpi.com/",
    description: "DPI is a club that brings people together to build tech stuff",
  },
  {
    name: "Columbia DPI",
    website: "https://www.columbiadpi.com/",
    description: "DPI is a club that brings people together to build tech stuff",
  },
  {
    name: "Columbia DPI",
    website: "https://www.columbiadpi.com/",
    description: "DPI is a club that brings people together to build tech stuff",
  }
];

const recomendedClubMock = [
  {
    name: "Columbia DPI",
    website: "https://www.columbiadpi.com/",
    description: "DPI is a club that brings people together to build tech stuff",
  },
  {
    name: "Columbia DPI",
    website: "https://www.columbiadpi.com/",
    description: "DPI is a club that brings people together to build tech stuff",
  },
  {
    name: "Columbia DPI",
    website: "https://www.columbiadpi.com/",
    description: "DPI is a club that brings people together to build tech stuff",
  }
];

import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Main from "./components/Main"

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      renderLogin: false,
      renderSignup: false,
      userData: null
    }
  }

  goBack = () => {
    this.setState({
      renderLogin: false,
      renderSignup: false
    })
  }

  logout = () => {
    this.setState({
      renderLogin: false,
      renderSignup: false,
      userData: null
    })
  }

  setUserData = (userInfo) => {
    this.setState({userData:userInfo})
  }

  render() {
    let {renderLogin, renderSignup, userData} = this.state;
    if(userData) {
      return <Main userData={userData} clubData={allClubMock} curatedData={recomendedClubMock} logout={this.logout} />
    }

    if(renderLogin) {
      return <Login goBack={this.goBack} setUserConfig={this.setUserData} />
    }

    if(renderSignup) {
      return <SignUp goBack={this.goBack} />
    }
    else {
      return (
        <SafeAreaView style={styles.container}>
          <View>
            <Button style={styles.buttonStyle} title="Login" onPress={() => this.setState({renderLogin:true})} />
            <Button style={styles.buttonStyle} title="Sign Up" onPress={() => this.setState({renderSignup:true})} />
          </View>
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
