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
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Button from "react-native-button"
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
            <View style={styles.logoHold}>
            </View>
            <View style={styles.buttonHold}>
              <Text style={styles.caption}>
                Find your new club today
              </Text>
              <Button containerStyle={styles.buttonContainer} style={styles.buttonStyle} onPress={() => this.setState({renderLogin:true})}>Login</Button>
              <Button containerStyle={styles.buttonContainer} style={styles.buttonStyle} onPress={() => this.setState({renderSignup:true})}>Sign Up</Button>
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
  },
  logoHold: {
    flex: 3
  },
  buttonHold: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 50,
    width: 250,
    marginTop:15,
    backgroundColor:"#0974ed",
    overflow:'hidden',
    justifyContent: 'center'
  },
  buttonStyle: {
    fontSize: 15,
    color: "white",
  },
  caption: {
    marginBottom:15,
  }
});
