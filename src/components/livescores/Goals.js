import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Cards from './Cards';

const Goals = ({ goal }) => {
  return (
    <>
      <View style={styles.scoreView}>
        {goal.home_scorer !== '' ? (
          <View style={styles.homeScorer}>
            <Text>{goal.time}'</Text>
            <Text style={{ marginLeft: 10 }}>{goal.home_scorer}</Text>
          </View>
        ) : null}
        {goal.away_scorer !== '' ? (
          <View style={styles.awayScorer}>
            <Text>{goal.time}'</Text>
            <Text style={{ marginLeft: 10 }}>{goal.away_scorer}</Text>
          </View>
        ) : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scoreView: {
    paddingBottom: 5,
  },

  homeScorer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#c4c4c4',
    padding: 10,
  },

  awayScorer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
    padding: 10,
  },
});

export default Goals;
