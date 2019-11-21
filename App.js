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
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Button from "react-native-button"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Main from "./components/Main"

const logoURL = "./assets/bigLogo.png";

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
              <Image source={require(logoURL)} style={styles.logo}/>
            </View>
            <View style={styles.buttonHold}>
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
    flex: 3,
    paddingTop: 110
  },
  logo: {
    height: 250,
    width: 250
  },
  buttonHold: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 50,
    width: 250,
    marginTop:23,
    borderRadius:3,
    backgroundColor:"#2FA6FF",
    overflow:'hidden',
    justifyContent: 'center'
  },
  buttonStyle: {
    fontSize: 15,
    color: "white",
  }
});
