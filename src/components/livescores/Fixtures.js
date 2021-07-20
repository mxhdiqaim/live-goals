import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Matches from '../../screens/Matches';

const Fixtures = ({ features, navigation, loading, error }) => {
  return (
    <>
      <Text style={{ alignSelf: 'center', fontSize: 18, padding: 10 }}>
        Matches
      </Text>
      <Text>{error}</Text>
      <Matches features={features} navigation={navigation} loading={loading} />
    </>
  );
};

const styles = StyleSheet.create({});

export default Fixtures;
