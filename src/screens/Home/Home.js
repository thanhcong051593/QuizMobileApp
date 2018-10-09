import React from 'react';
import { View, Button, Image } from 'react-native';
import {styles} from './HomeStyleSheet';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.home}>
        <View style={styles.img}>
          <Image source={require('../../assets/images/rsz_quiz.png')} />
        </View>
        <View style={styles.btn}>
          <Button
            title="Let's quiz!"
            onPress={() => this.props.navigation.navigate('Quiz')}
          />
        </View>
      </View>
    );
  }
};

export default HomeScreen;