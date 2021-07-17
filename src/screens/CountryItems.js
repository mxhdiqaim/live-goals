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

import Loading from './Loading';

const CountryItem = ({ navigation }) => {
  const id = navigation.getParam('id');

  const [countryItems, setCountryItems] = useState(null);
  const [loading, setLoading] = useState(false);

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
      console.log(err);
    }
  };

  useEffect(() => {
    getCountryItems(id);
  }, []);

  return (
    <>
      <Text style={{ fontSize: 24, alignSelf: 'center' }}>Leagues</Text>
      <FlatList
        data={countryItems}
        keyExtractor={countryItem => countryItem.league_id}
        renderItem={({ item }) => {
          if (loading) {
            return <Loading />;
          } else {
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
          }
        }}
      />
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from de Finibus Bonorum et Malorum by Cicero are also reproduced in
        their exact original form, accompanied by English versions from the 1914
        translation by H. Rackham.
      </Text>
    </>
  );
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
