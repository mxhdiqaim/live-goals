import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
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
  // view: {
  //   alignSelf: 'center',
  //   position: 'absolute',
  //   top: 300,
  //   backgroundColor: '#333',
  // },
});

export default Loading;
