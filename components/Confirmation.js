import React from 'react';
import { View, Text } from 'react-native';
import {
  PieChart,
} from 'react-native-chart-kit';
import { Button } from 'react-native-elements';

export default class Confirmation extends React.Component {
  state = {
    data: [15, 15, 15, 15, 15, 15, 15],
  }

  handleConfirm = () => {

  };

  render() {
    const pieData = [
      {
        name: 'Active',
        population: this.state.data[0],
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 11,
      },
      {
        name: 'Governing Body',
        population: this.state.data[1],
        color: '#F00',
        legendFontColor: '#7F7F7F',
        legendFontSize: 11,
      },
      {
        name: 'tech design',
        population: this.state.data[2],
        color: 'black',
        legendFontColor: '#7F7F7F',
        legendFontSize: 11,
      },
      {
        name: 'music arts',
        population: this.state.data[3],
        color: 'blue',
        legendFontColor: '#7F7F7F',
        legendFontSize: 11,
      },
      {
        name: 'preprofessional',
        population: this.state.data[4],
        color: 'green',
        legendFontColor: '#7F7F7F',
        legendFontSize: 11,
      },
      {
        name: 'publications',
        population: this.state.data[5],
        color: 'yellow',
        legendFontColor: '#7F7F7F',
        legendFontSize: 11,
      },
      {
        name: 'activism/service',
        population: this.state.data[6],
        color: 'purple',
        legendFontColor: '#7F7F7F',
        legendFontSize: 11,
      },
    ];

    return (
      <View>
        <Text> Please Confirm Your Sign-Up</Text>
        <PieChart
          data={pieData}
          width={300}
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
        <Button title="Confirm Sign-Up" type="outline" onClick={this.handleConfirm} />
      </View>
    );
  }
}
