import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Country from '../screens/Country';

const Countries = ({ countries, loading }) => {
  return (
    <View>
      <Text>Countries</Text>
      <FlatList
        data={countries}
        horizontal
        keyExtractor={country => country.country_id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <Country country={item} loading={loading} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Countries;
