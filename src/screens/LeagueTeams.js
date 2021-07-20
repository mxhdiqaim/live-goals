import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';

import Fixtures from '../components/livescores/Fixtures';
import Table from '../components/livescores/Table';

const Teams = ({ navigation }) => {
  const id = navigation.getParam('id');

  const [standings, setStandings] = useState([]);
  const [features, setFeatures] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = `9ee54314fc63b8e67f2b3f40b61650047f4b5d7b2956b5a6334143fd9ca73cd1`;

  // getStandings Function
  const getStandings = async id => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://apiv2.apifootball.com/?action=get_standings&league_id=${id}&APIkey=${API_KEY}`,
      );

      setStandings(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  // getFeatures Function
  const getFeatues = async id => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://apiv2.apifootball.com/?action=get_events&from=2019-04-01&to=2019-04-03&league_id=${id}&APIkey=${API_KEY}`,
      );

      setFeatures(response.data);
      console.log(response.data);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStandings(id);
    getFeatues(id);
  }, []);

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Fixtures'
          children={() => (
            <Fixtures
              features={features}
              loading={loading}
              navigation={navigation}
              error={error}
            />
          )}
        />
        <Tab.Screen
          name='Table'
          children={() => (
            <Table
              standings={standings}
              loading={loading}
              navigation={navigation}
              error={error}
            />
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btn: {
    fontSize: 18,
    backgroundColor: '#444',
    width: 210,
    color: '#ddd',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default Teams;
