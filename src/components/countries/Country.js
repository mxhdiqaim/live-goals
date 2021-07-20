import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Loading from '../layout/Loading';

const Country = ({ country, loading }) => {
  if (loading) {
    return <Loading />;
  } else {
    return (
      <View style={styles.view}>
        <Image
          style={styles.image}
          source={country.country_logo ? { uri: country.country_logo } : null}
        />

        <Text>{country.country_name}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 40,
    margin: 4,
  },
  view: {
    paddingBottom: 10,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Country;
