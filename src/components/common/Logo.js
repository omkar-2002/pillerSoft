import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const Logo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text}>Logo</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>Ipsum</Text>
      </View>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    display: 'flex',
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    height: 60,
  },
  container1: {
    backgroundColor: Colors.primary,
    flexBasis: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: Colors.white, fontWeight: 'bold', textAlign: 'center'},
  container2: {
    backgroundColor: Colors.secondary,
    flexBasis: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
