import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Fixtures from './Fixtures';

const Table = ({ standings }) => {
  return (
    <View style={styles.view}>
      <View style={styles.teamsHeaderStyle}>
        <Text style={{ paddingRight: 150 }}>Teams</Text>
        <Text>P</Text>
        <Text>W</Text>
        <Text>D</Text>
        <Text>L</Text>
        <Text>Pt</Text>
      </View>
      <FlatList
        data={standings}
        keyExtractor={standing => standing.team_id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                justifyContent: 'space-between',
              }}>
              <Text style={{ paddingRight: 180 }}>{item.team_name}</Text>
              <Text>{item.overall_league_payed}</Text>
              <Text>{item.away_league_W}</Text>
              <Text>{item.home_league_D}</Text>
              <Text>{item.overall_league_L}</Text>
              <Text>{item.overall_league_PTS}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  teamsHeaderStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ddd',
  },
  teamsDetailStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default Table;
