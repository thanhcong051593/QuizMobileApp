import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {styles} from './QuizStyleSheet';

class QuizScreen extends React.Component {
  render() {
    return (
      <View style={styles.quiz}>
        <Text>Quiz Screen</Text>
        <Button
          title="Go to score"
          onPress={() => this.props.navigation.navigate('Score')}
        />
      </View>
    );
  }
};

export default QuizScreen;