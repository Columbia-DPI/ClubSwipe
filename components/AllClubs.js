import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class AllClubs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <View style={styles.container}>
            <Text>{JSON.stringify(this.props.clubs)}</Text>
            <Button title={'Back'} onPress={this.props.dismiss} />
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