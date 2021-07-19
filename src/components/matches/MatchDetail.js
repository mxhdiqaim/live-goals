import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import axios from 'axios';

import Loading from '../layout/Loading';
import Goals from '../livescores/Goals';
import Cards from '../livescores/Cards';

const MatchDetail = ({ navigation }) => {
  const id = navigation.getParam('id');

  const [matchDetails, setMatchDetails] = useState(null);

  const API_KEY = `9ee54314fc63b8e67f2b3f40b61650047f4b5d7b2956b5a6334143fd9ca73cd1`;

  // getCountries function
  const getMatchDetails = async () => {
    try {
      const response = await axios.get(
        `https://apiv2.apifootball.com/?action=get_events&from=2019-04-01&to=2019-04-03&match_id=${id}&APIkey=${API_KEY}`,
      );
      setMatchDetails(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // RUN THE COMPONENTS ON LOAD
  useEffect(() => {
    getMatchDetails(id);
  }, []);

  if (matchDetails == null) {
    return <Loading />;
  }

  return (
    <FlatList
      data={matchDetails}
      keyExtractor={matchDetail => matchDetail.match_id}
      renderItem={({ item }) => (
        <>
          <View style={styles.matchDetailStyle}>
            <View style={styles.homeStyles}>
              <Image
                source={{ uri: item.team_home_badge }}
                style={styles.img}
              />
              <Text style={styles.teamName}>{item.match_hometeam_name}</Text>
            </View>
            <View style={styles.scores}>
              <Text>
                {item.match_hometeam_score} : {item.match_awayteam_score}
              </Text>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.halfTimeGoals}>HT</Text>
                <Text style={styles.halfTimeGoals}>
                  {item.match_hometeam_halftime_score} :{' '}
                  {item.match_awayteam_halftime_score}
                </Text>
              </View>
            </View>
            <View style={styles.awayStyles}>
              <Image
                source={{ uri: item.team_away_badge }}
                style={styles.img}
              />
              <Text style={styles.teamName}>{item.match_awayteam_name}</Text>
            </View>
          </View>
          <Text style={{ fontSize: 22, alignSelf: 'center', padding: 10 }}>
            Goals / Cards
          </Text>
          <FlatList
            data={item.goalscorer}
            keyExtractor={goal => goal.time}
            renderItem={({ item }) => {
              return (
                <>
                  <Goals goal={item} />
                </>
              );
            }}
          />
          <Cards cards={item.cards} />
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  matchDetailStyle: {
    flexDirection: 'row',
    // alignContent: 'space-between',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
  },
  halfTimeGoals: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
  },
  homeStyles: {},
  awayStyles: {},
  img: {
    height: 100,
    width: 100,
  },
  teamName: {
    alignSelf: 'center',
    paddingTop: 10,
    fontSize: 16,
  },
  scores: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
  },
});

export default MatchDetail;
