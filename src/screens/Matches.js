import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

import Loading from '../components/layout/Loading';

const Matches = ({ features, navigation, loading }) => {
  if (loading) {
    return <Loading />;
  } else {
    return (
      <View>
        <FlatList
          data={features}
          keyExtractor={feature => feature.match_id}
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
      </View>
    );
  }
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

export default Matches;
