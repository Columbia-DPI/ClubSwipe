import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import AllClubs from "./AllClubs"
import Swipe from "./Swipe"

import { Header, Card } from 'react-native-elements';


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAllClubs: false,
            likedClubs: [],
            passedClubs: []
        }
    }

    
    handleLikedClub = (club) => {
        this.setState({ likedClubs: [...this.state.likedClubs, club] })
    };

    handlePassedClub = (club) => {
        this.setState({ passedClubs: [...this.state.passedClubs, club] })
    };


    backToMe = () => {
        this.setState({showAllClubs: false})
    }

    renderCards = (club) => {
        return (
            <Card title={club.name} titleStyle={{ fontSize: 14 }} >
            <View style={{ height: 200 }}>
                <Image
                source={require('../assets/icon.png')}
                style={{ width: '100%', height: 200 }}
                />
            </View>
            <View style={styles.detailWrapper}>
                <Text>{club.website}</Text>
                <Text>{club.description}</Text>
            </View>
            </Card>
        );
    };

    renderNoMoreCards = () => {
        return (
          <Card title="No More cards">
            <Button
              title="Do something"
              large
              icon={{ name: 'my-location' }}
              backgroundColor="#03A9F4"
            />
          </Card>
        );
      };

    render() {
        let {showAllClubs} = this.state;
        if(showAllClubs) {
            return <AllClubs dismiss={this.backToMe} clubs={this.props.clubData} />
        }
        return (
            <View style={styles.container}>
                <Header
                leftComponent= 
                {<Button title={'Logout'} onPress={this.props.logout} />}
                centerComponent={{ text: 'MY CLUBS', style: { color: '#fff' } }}
                rightComponent={<Button title={'All Clubs'} onPress={() => this.setState({showAllClubs:true})} />}
                />
                
                <Swipe data={this.props.curatedData}
                    onSwipeRight={this.handleLikedClub}
                    onSwipeLeft={this.handlePassedClub}
                    renderCard={this.renderCards}
                    renderNoMoreCards={this.renderNoMoreCards}
                    keyProp="0"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    website: {
      color: 'blue',
    },
    search: {
      marginTop: 10,
    },
    buttonStyle: {
    },
  });
  