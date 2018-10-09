import { createStackNavigator } from 'react-navigation';
import { HomeScreen, QuizScreen, ScoreScreen } from './screens';

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Quiz: {
    screen: QuizScreen,
  },
  Score: {
    screen: ScoreScreen,
  },
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });