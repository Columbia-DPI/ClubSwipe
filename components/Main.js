import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AllClubs from "./AllClubs"

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAllClubs: false
        }
    }

    backToMe = () => {
        this.setState({showAllClubs: false})
    }

    render() {
        let {showAllClubs} = this.state;
        if(showAllClubs) {
            return <AllClubs dismiss={this.backToMe} clubs={this.props.clubData} />
        }
        return (
            <View style={styles.container}>
                <Button title={'All Clubs'} onPress={() => this.setState({showAllClubs:true})} />
                <Button title={'Logout'} onPress={this.props.logout} />
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