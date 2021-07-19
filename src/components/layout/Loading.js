import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import loadingGif from '../../../assets/loading.gif';

const Loading = () => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={loadingGif} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
