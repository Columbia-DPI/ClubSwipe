import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    KeyboardAvoidingView,
    ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements';
import AnimateLoadingButton from 'react-native-animate-loading-button';

export default class Login extends React.Component {

    static navigationOptions = {
        title: 'LogIn',
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            password: '',
            savedPass: '',
            email: '',
        };
    }

    goToHome = () => {
        this.loadingLogInButton.showLoading(true)
        this.props.navigation.navigate('Home');
        this.loadingLogInButton.showLoading(false)
    }

    render() {
        return (
            <ScrollView style={styles.background}>
<Text style={styles.header}>CLUB <Text style={styles.header2}> SWIPE</Text>
          </Text>
                <View style={styles.iconSection}>
            <Icon
              style={{ padding: 10 }}
              name="envelope"
              size={20}
              color="#000"
            />
            <TextInput
              label="Email"
              style={styles.textInput}
              onChangeText={email => this.setState({ email: email.toLowerCase() })}
              value={this.state.email}
            />
          </View>
          <View style={styles.iconSection}>
            <Icon
              style={{ padding: 10 }}
              name="lock"
              size={20}
              color="#000"
            />
            <TextInput
              label="Password"
              style={styles.textInput}
              secureTextEntry={true}
              onChangeText={password => this.setState({ password: password })}
              value={this.state.password}
              theme={{ colors: { text: 'black' } }}
            />
          </View>
                <Text></Text>
                <Text></Text>
                <Text></Text>

                <AnimateLoadingButton
                    ref={c => (this.loadingLogInButton = c)}
                    width={300}
                    height={40}
                    style={{ margin: 20 }}
                    title="LogIn"
                    titleFontSize={16}
                    titleColor="white"
                    backgroundColor="black"
                    borderRadius={4}
                    onPress={() => this.goToHome()}
                />
                <Text></Text>
                <AnimateLoadingButton
                    ref={c => (this.loadingRegisterInButton = c)}
                    width={300}
                    height={40}
                    style={{ marginTop: 20 }}
                    title="Register"
                    titleFontSize={16}
                    titleColor="white"
                    backgroundColor="#535353"
                    borderRadius={4}
                    onPress={() => this.goToHome()}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        fontSize: 30,
        marginLeft: 20,
        marginTop: 20,
        letterSpacing: 20,
        color: 'black',
        marginBottom: 100,
        //       fontWeight: 'bold',
    },
    header2: {
        fontSize: 30,
        marginLeft: 20,
        marginTop: 20,
        letterSpacing: 20,
        color: 'blue',
        marginBottom: 100,
               fontWeight: 'bold',
    },
    textInput: {
        flex: 1,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: 'white',
        color: 'black',
        height: 60,
    },
    LoginButton: {
        color: 'green',
        borderRadius: 30,
    },
    iconSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 40,
      },
})