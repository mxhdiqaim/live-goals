import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Touchable,
} from 'react-native';

const Cards = ({ cards }) => {
  console.log(cards);

  return (
    <View>
      <Text style={styles.cards}>Cards</Text>
      <FlatList
        data={cards}
        keyExtractor={card => card.time}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.card}>
              <View style={styles.home}>
                {item.home_fault ? (
                  <Text style={{ paddingRight: 10 }}>{item.home_fault}</Text>
                ) : null}
                {item.home_fault ? <Text>{item.card}</Text> : null}
              </View>
              <View style={styles.away}>
                {item.away_fault ? (
                  <Text style={{ paddingRight: 10 }}>{item.away_fault}</Text>
                ) : null}
                {item.away_fault ? <Text>{item.card}</Text> : null}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    fontSize: 22,
    alignSelf: 'center',
    backgroundColor: '#333',
    color: '#eee',
    width: '100%',
    textAlign: 'center',
    padding: 10,
  },
  card: {
    padding: 10,
    backgroundColor: '#ddd',
  },

  away: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  home: {
    flexDirection: 'row',
  },
});

export default Cards;
