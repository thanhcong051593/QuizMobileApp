import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {styles} from './ScoreStyleSheet';

class ScoreScreen extends React.Component {
  render() {
    return (
      <View style={styles.score}>
        <Text>Score Screen</Text>
      </View>
    );
  }
};

export default ScoreScreen;