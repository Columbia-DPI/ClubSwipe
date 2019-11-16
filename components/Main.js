import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Main View Here</Text>
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