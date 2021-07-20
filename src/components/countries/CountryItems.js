import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  Image,
} from 'react-native';
import Loading from '../layout/Loading';

const CountryItem = ({ navigation }) => {
  const id = navigation.getParam('id');

  const [countryItems, setCountryItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = `9ee54314fc63b8e67f2b3f40b61650047f4b5d7b2956b5a6334143fd9ca73cd1`;

  // getCountryItem Function
  const getCountryItems = async id => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://apiv3.apifootball.com/?action=get_leagues&country_id=${id}&APIkey=${API_KEY}`,
      );

      setCountryItems(response.data);

      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getCountryItems(id);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Text>{error}</Text>
        <Text style={{ fontSize: 24, alignSelf: 'center' }}>Leagues</Text>
        <FlatList
          data={countryItems}
          keyExtractor={countryItem => countryItem.league_id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('LeagueTeams', { id: item.league_id })
                }>
                <View style={styles.view}>
                  <Text style={styles.text}>{item.league_name}</Text>
                  <Image
                    style={styles.image}
                    source={item.league_logo ? { uri: item.league_logo } : null}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </>
    );
  }
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 4,
    resizeMode: 'center',
  },
  text: {
    fontSize: 18,
    // alignSelf: 'center',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default CountryItem;
