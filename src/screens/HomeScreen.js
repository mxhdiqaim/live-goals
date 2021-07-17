import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Countries from '../components/Countries';
import Matches from './Matches';

const HomeScreen = () => {
  const API_KEY = `9ee54314fc63b8e67f2b3f40b61650047f4b5d7b2956b5a6334143fd9ca73cd1`;

  /**
   * STATES
   */
  // countries state
  const [countries, setCountries] = useState(null);
  // loading state
  const [loading, setLoading] = useState(false);

  // getCountries function
  const getCountries = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://apiv3.apifootball.com/?action=get_countries&APIkey=${API_KEY}`,
      );
      setLoading(false);
      setCountries(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // RUN THE COMPONENTS ON LOAD
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <View style={styles.view}>
      <Countries countries={countries} loading={loading} />
      <Matches />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default HomeScreen;
