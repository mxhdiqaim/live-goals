import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import loadingGif from '../../assets/loading.gif';

const Loading = () => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={loadingGif} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default Loading;
