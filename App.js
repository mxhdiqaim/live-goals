import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import CountryItems from './src/screens/CountryItems';
import Country from './src/screens/Country';
import LeagueTeams from './src/screens/LeagueTeams';
import Matches from './src/screens/Matches';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Country: Country,
    CountryItems: CountryItems,
    LeagueTeams: LeagueTeams,
    Matches: Matches,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Live Goals',
    },
  },
);

export default createAppContainer(navigator);
