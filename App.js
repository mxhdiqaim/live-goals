import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';

import CountryItems from './src/components/countries/CountryItems';
import Country from './src/components/countries/Country';
import LeagueTeams from './src/screens/LeagueTeams';
import Matches from './src/screens/Matches';
import MatchDetail from './src/components/matches/MatchDetail';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Country: Country,
    CountryItems: CountryItems,
    LeagueTeams: LeagueTeams,
    Matches: Matches,
    MatchDetail: MatchDetail,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Live Goals',
    },
  },
);

export default createAppContainer(navigator);
