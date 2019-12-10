import React from 'react';
import { TextInput } from 'react-native-paper';
import { Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { Button, Header } from 'react-native-elements';

export default class SignUp extends React.Component {
  state = {
    data: [],
    response1: 0,
    response2: 0,
    response3: 0,
    response4: 0,
    response5: 0,
    response6: 0,
    response7: 0,
    hours: 0,
    selectivity: 0,
  };

  handleSubmit = () => {
    this.state.data.push(this.state.response1)
    this.state.data.push(this.state.response2)
    this.state.data.push(this.state.response3)
    this.state.data.push(this.state.response4)
    this.state.data.push(this.state.response5)
    this.state.data.push(this.state.response6)
    this.state.data.push(this.state.response7)
  };

  render() {
    return (
      <SafeAreaView>
          <Header
          leftComponent= 
          {<Button
            style={styles.buttonStyle}
            onPress={this.props.goBack}
            title="Back "
          />}
        />
        <ScrollView>
        <Text>
          How interested are you in the following club types from 0 to 100
        </Text>

        <Text>{this.state.data}</Text>
        <TextInput
          onChangeText={response1 => this.setState({ response1: response1 })}
        />
        <Text>governing body</Text>
        <TextInput
          onChangeText={response2 => this.setState({ response2: response2 })}
        />
        <Text>tech design</Text>
        <TextInput
          onChangeText={response3 => this.setState({ response3: response3 })}
        />
        <Text>music arts</Text>
        <TextInput
          onChangeText={response4 => this.setState({ response4: response4 })}
        />
        <Text>preprofessional</Text>
        <TextInput
          onChangeText={response5 => this.setState({ response5: response5 })}
        />
        <Text>publications</Text>
        <TextInput
          onChangeText={response6 => this.setState({ response6: response6 })}
        />
        <Text>activism/service</Text>
        <TextInput
          onChangeText={response7 => this.setState({ response7: response7 })}
        />
        <Button title="Submit" type="outline" onClick={this.handleSubmit} />
      </ScrollView>
      </SafeAreaView>
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