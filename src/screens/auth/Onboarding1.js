import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import Logo from '../../components/common/Logo';

const Onboarding1 = ({width}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Logo />
    </View>
  );
};

export default Onboarding1;

const styles = StyleSheet.create({});
