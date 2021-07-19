import React from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { withNavigation } from 'react-navigation';
import Country from './Country';

const Countries = ({ countries, navigation, loading }) => {
  return (
    <View style={{ paddingTop: 5 }}>
      <Text style={{ alignSelf: 'center', textTransform: 'uppercase' }}>
        Countries
      </Text>
      <FlatList
        data={countries}
        horizontal
        keyExtractor={country => country.country_id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CountryItems', {
                  id: item.country_id,
                  loading: loading,
                })
              }>
              <Country country={item} loading={loading} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default withNavigation(Countries);
