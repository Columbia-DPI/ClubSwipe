import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  Button,
} from 'react-native';
import { Card, SearchBar, Header } from 'react-native-elements';
const DATA = [
  {
    website: 'www.FirstClub.org',
    key: 'First Club',
    description:
      'this is a random description for a club that is interesting and is on ClubSwipe',
  },
  {
    website: 'www.SecondClub.org',
    key: 'Second Club',
    description:
      'this is a random description for a club that is interesting and is on ClubSwipe',
  },
  {
    website: 'www.ThirdClub.org',
    key: 'Third Club',
    description:
      'this is a random description for a club that is interesting and is on ClubSwipe',
  },
  {
    website: 'www.FourthClub.org',
    key: 'Fourth Club',
    description:
      'this is a random description for a club that is interesting and is on ClubSwipe',
  },
  {
    website: 'www.FifthClub.org',
    key: 'Fifth Club',
    description:
      'this is a random description for a club that is interesting and is on ClubSwipe',
  },
  {
    website: 'www.SixthClub.org',
    key: 'Sixth Club',
    description:
      'this is a random description for a club that is interesting and is on ClubSwipe',
  },
];

export default class AllClubs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: 'Search For Clubs',
      websites: [],
      descriptions: [],
      clubName: [],
      data: [],
    };
  }

  componentWillMount() {
    this.setState({
      data: DATA,
    });
  }
  updateSearch = search => {
    this.setState({
      search,
    });
  };

  executeSearch = search => {
    for (let i = 0; i < this.state.length; i++) {
      console.log('Here');
    }
  };

  render() {
    return (
      <ScrollView>
        <Header
          leftComponent= 
          {<Button
            style={styles.buttonStyle}
            onPress={this.props.dismiss}
            title="Back "
          />}
          centerComponent={{ text: 'ALL CLUBS', style: { color: '#fff' } }}
        />

        <View style={styles.searchbarStyle}>
          <SearchBar
            placeholder="Search For Clubs"
            value={this.state.search}
            onChangeText={this.updateSearch}
            style={styles.search}
          />
        </View>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <Card title={item.key}>
                <Text style={styles.website}>{item.website}</Text>
                <Text>{item.description}</Text>
              </Card>
            )}
            keyExtractor={item => item.key}
          />
        </SafeAreaView>
      </ScrollView>
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
