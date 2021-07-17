import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import axios from 'axios';

const Matches = ({ navigation }) => {
  // const id = navigation.getParam('id');

  const [matches, setMatches] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = `9ee54314fc63b8e67f2b3f40b61650047f4b5d7b2956b5a6334143fd9ca73cd1`;

  // getCountryItem Function
  const getMatches = async id => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://apiv3.apifootball.com/?action=get_events&match_live=${10}&APIkey=${API_KEY}`,
      );

      setMatches(response.data);
      console.log(response.data);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <View>
      <Text>Matches</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Matches;
