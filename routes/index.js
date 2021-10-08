import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DashboardPage from '../page/DashboardPage';
import WelcomePage from '../page/WelcomePage';

const StackNavigator = createStackNavigator(
  {
    WelcomePage: {
      screen: WelcomePage,
    },
    DashboardPage: {
      screen: DashboardPage,
    },
  },
  {
    initialRouteName: 'WelcomePage',
    headerMode: 'none',
  },
);

export default createAppContainer(StackNavigator);
