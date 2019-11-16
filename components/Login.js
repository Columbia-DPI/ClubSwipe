import React from 'react';
import { StyleSheet, TextInput, Text, View, SafeAreaView, Button } from 'react-native';

const USER_MOCK = {
    name: "Columbia DPI",
    uid: "a2b3d213"
}

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    onLogin = () =>{
        let {username,password} = this.state;
        // Insert authentication here - make backend call
        this.props.setUserConfig(USER_MOCK);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Login</Text>
                <TextInput
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
                placeholder={'Username'}
                style={styles.input}
                />
                <TextInput
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
                />
                
                <Button
                title={'Login'}
                style={styles.inputButton}
                onPress={this.onLogin}
                />
                <Button
                title={'Back'}
                style={styles.inputButton}
                onPress={this.props.goBack}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },

  inputButton: {
    width: 80,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});