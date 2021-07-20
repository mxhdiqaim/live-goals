import React, { useEffect, useState } from 'react';
import { withNavigation } from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Loading from '../layout/Loading';

import axios from 'axios';

const SearchMatches = ({ navigation }) => {
  const [matches, setMatches] = useState(null);

  const API_KEY = `9ee54314fc63b8e67f2b3f40b61650047f4b5d7b2956b5a6334143fd9ca73cd1`;

  // getStandings Function
  const getMatches = async () => {
    // Date object();
    let day = new Date().getDay();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();

    if (day < 9) {
      day = `0${day}`;
    }

    if (month < 9) {
      month = `0${month}`;
    }

    try {
      const response = await axios.get(
        `https://apiv2.apifootball.com/?action=get_events&from=${year}-${month}-${day}&to=2021-07-03&APIkey=${API_KEY}`,
      );

      setMatches(response.data);
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMatches();
  }, []);

  if (matches == null) {
    return <Loading />;
  }

  return (
    <>
      <Text style={{ alignSelf: 'center', fontSize: 18, padding: 10 }}>
        Live Matches
      </Text>
      <FlatList
        data={matches}
        keyExtractor={match => match.match_id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.matchesStyles}
              onPress={() =>
                navigation.navigate('MatchDetail', { id: item.match_id })
              }>
              <Text>{item.match_hometeam_name}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>{item.match_hometeam_score}</Text>
                <Text> : </Text>
                <Text>{item.match_awayteam_score}</Text>
              </View>
              <Text>{item.match_awayteam_name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  matchesStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ddd',
    marginBottom: 5,
  },
});

export default withNavigation(SearchMatches);
