import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title={'Back'} onPress={this.props.goBack} />
                <Text>SignUp here - complete later</Text>
            </View>
        );
    }

    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});