import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Loading from './Loading';

const Country = ({ country, loading }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.view}>
      <Image style={styles.image} source={{ uri: country.country_logo }} />
      <Text>{country.country_name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 30,
    margin: 4,
  },
  view: {
    paddingBottom: 5,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Country;
