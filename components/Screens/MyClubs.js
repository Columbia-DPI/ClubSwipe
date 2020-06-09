import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    KeyboardAvoidingView,
    Flat,
} from 'react-native';
import data from '../ClubData/data';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import AnimateLoadingButton from 'react-native-animate-loading-button';

function Item(props) {
    return <Text>{props.id}</Text>;
}

function MyList(items) {
    return (
        <View>
            {items.map((item) => <Item key={item.key} value={item} />)}
        </View>
    );
}

export default class MyClubs extends React.Component {

    static navigationOptions = {
        title: 'My Clubs',
    };

    constructor(props) {
        super(props);
        this.state = {
            club: [],
        };
    }

    goToHome = () => {
        this.loadingLogInButton.showLoading(true)
        this.props.navigation.navigate('Home');
        this.loadingLogInButton.showLoading(false)
    }
    componentDidMount() {
        var length = this.props.navigation.state.params.choices.length;
        var currIndex = 0;
        finalData = [];
        for (var i = 0; i < length; i++) {
            currIndex = this.props.navigation.state.params.choices[i];
            var secondKey = Object.keys(data)[currIndex]; //fetched the key at second index
            finalData.push(data[secondKey]);
        }
        this.setState({ club: finalData })
    }

    populateScreen = (clubs) => {
        return (
            < View>
                {this.state.club.map(info => <Text>{info}</Text>)}
            </View >
        )
    }
    SampleFunction = (item) => {


    }

    render() {
        var SampleNameArray = this.state.club
        return (
            <ScrollView style={styles.background}>
                <FlatList
                    data={this.state.club}
                    renderItem={({ item }) =>
                    <View>
                        <Card>
                            <Card.Title title={item.price} />
                            <Card.Content>
                                <Paragraph>{item.name}</Paragraph>
                                <Paragraph> Club size: 20-40 members</Paragraph>
                                <Paragraph>Time Commitment: 5 hours/week </Paragraph>
                            </Card.Content>
                            <Card.Cover source={{ uri: 'https://images.squarespace-cdn.com/content/v1/5865a9576b8f5b49fd46ff4f/1532864484490-OS0IAU2DL3OLNS6FRW7L/ke17ZwdGBToddI8pDm48kCtHuNmKXUP2aDTuG7RXTpV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ue2QNbLMaeDzV7o1juRm33TKX1DWC_h02Fh9N_yztdqxjnlzPsk3eU__fePW63nezw/Five+Takeaways+from+the+Recent+ACC+Compliance+Club+Meeting' }} />
                        </Card>
                        <Text></Text>
                        <Text></Text>
                        </View>}
                ></FlatList>
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
    TextStyle: {
        fontSize: 25,
        textAlign: 'center'
    },
    title: {
        fontSize: 32,
    },
})