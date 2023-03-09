import React from 'react';
import {View, Text} from 'react-native';
import HomeScreenStyles from './HomeScreen.styles';

export const HomeScreenView = (): JSX.Element => {
  return (
    <View style={HomeScreenStyles.mainContainer}>
      <Text style={HomeScreenStyles.mainTitle}>App-Upgrade Sample</Text>
    </View>
  );
};

export default HomeScreenView;
